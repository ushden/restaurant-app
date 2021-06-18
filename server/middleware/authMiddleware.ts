import { NextFunction, Request, Response } from 'express';

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.method === 'OPTIONS') {
		next();
	}

	try {
		const token = req.headers.authorization?.split(' ')[1];

		if (!token) {
			return res.status(403).json({ message: 'Пользователь не авторизован!' });
		}

		next();
	} catch (error) {
		return res.status(403).json({ message: 'Пользователь не авторизован!' });
	}
};
