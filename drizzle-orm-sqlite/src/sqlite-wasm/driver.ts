import { Logger } from 'drizzle-orm';
import { BaseSQLiteDatabase } from '~/db';
import { SQLiteSyncDialect } from '~/dialect';
import { SQLiteWasmSession } from './session';

export interface DrizzleConfig {
	logger?: Logger;
}

export type SQlite3WasmDb = any;

export type SQLite3Wasm = {
	opfs?: {
		OpfsDb: { new(): SQlite3WasmDb }
	}
	capi: {
		sqlite3_libversion: () => any,
		sqlite3_sourceid: () => any
	}
	oo1: {
		DB: { new(): SQlite3WasmDb }
	}
};

export type SQLiteWasmDatabase = BaseSQLiteDatabase<'sync', void>;

export function drizzle(client: SQlite3WasmDb, config: DrizzleConfig = {}): SQLiteWasmDatabase {
	const dialect = new SQLiteSyncDialect();
	const session = new SQLiteWasmSession(client, dialect, { logger: config.logger });
	return new BaseSQLiteDatabase(dialect, session);
}