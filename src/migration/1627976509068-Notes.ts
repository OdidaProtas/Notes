import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1627976509068 implements MigrationInterface {
    name = 'Notes1627976509068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "composition"`);
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "isArchived"`);
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "reminder"`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "content" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "content"`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "reminder" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "isArchived" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "composition" character varying NOT NULL`);
    }

}
