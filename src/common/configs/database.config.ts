import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
	return {
		type: 'postgres',
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT, 10) || 5432,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		name: process.env.DB_NAME,
	};
});
