import { MigrationConfig, readMigrationFiles } from 'drizzle-orm/migrator';
import { SQLiteWasmDatabase } from './driver';

export function migrate(db: SQLiteWasmDatabase, config: string | MigrationConfig) {
	const migrations = readMigrationFiles(config);
	db.dialect.migrate(migrations, db.session);
}
