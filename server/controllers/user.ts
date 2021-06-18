import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import User from '../modules/user';
import Role from '../modules/role';
import { JWTTypes } from '../types';

const generateAccessToken = (id: string, roles: Array<string>) => {
	const payload: JWTTypes = { id, roles };
	const secret = process.env.SECRET_KEY;

	if (secret) {
		return jwt.sign(payload, secret, { expiresIn: '48h' });
	}
};

export const registration = async (req: Request, res: Response) => {
	try {
		const validationErrors = validationResult(req);

		if (!validationErrors.isEmpty()) {
			return res
				.status(400)
				.json({ message: 'Ошибка при регистрации', validationErrors });
		}

		const { name, password } = req.body;
		const candidate = await User.findOne({ name });

		if (candidate) {
			return res
				.status(400)
				.json({ message: 'Такой пользователь уже зарегестрирован' });
		}

		const hashPassword = bcrypt.hashSync(password, 3);
		const userRole = await Role.findOne({ value: 'USER' });
		const user = new User({
			name,
			password: hashPassword,
			roles: [userRole.value],
		});

		user.save();

		return res
			.status(200)
			.json({ message: 'Пользователь успешно зарегестрирован' });
	} catch (error) {
		return res.status(400).json({ message: error.message });
	}
};

export const adminLogin = async (req: Request, res: Response) => {
	try {
		const { name, password } = req.body;
		const user = await User.findOne({ name });

		if (!user) {
			return res
				.status(404)
				.json({ message: `Пользователь ${name} не найден` });
		}

		if (!user.roles.includes('ADMIN')) {
			return res.status(403).json({ message: 'У вас нету доступа!' });
		}

		const validPassword = bcrypt.compareSync(password, user.password);

		if (!validPassword) {
			return res.status(400).json({ message: 'Неверный пароль!' });
		}

		const token = generateAccessToken(user._id, user.roles);

		return res.status(200).json({
			token,
			user: {
				_id: user._id,
				name: user.name,
				roles: user.roles,
			},
		});
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();

		return res.status(200).json(users);
	} catch (error) {
		return res
			.status(400)
			.json({ message: 'Не удалось получить пользователей' });
	}
};
