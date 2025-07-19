import { DataSourceOptions } from 'typeorm';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST ?? 'localhost',
  port: parseInt(process.env.POSTGRES_PORT ?? '5432'),
  username: process.env.POSTGRES_USER ?? 'user',
  password: process.env.POSTGRES_PASSWORD ?? 'password',
  database: process.env.POSTGRES_DB ?? 'finance_db',
  entities: [__dirname + '/../**/*.entity{.ts,.js}', __dirname + '/../**/*-entity{.ts,.js}'],
  synchronize: process.env.NODE_ENV !== 'production',
  logging: true,
};
