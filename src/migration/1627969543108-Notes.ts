import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1627969543108 implements MigrationInterface {
    name = 'Notes1627969543108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "title" character varying, "subtitle" character varying, "composition" character varying NOT NULL, "date" TIMESTAMP NOT NULL, "isImportant" boolean NOT NULL DEFAULT false, "isArchived" boolean NOT NULL DEFAULT false, "reminder" TIMESTAMP, "user" integer NOT NULL, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "note"`);
    }

}
