import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1628153909481 implements MigrationInterface {
    name = 'Notes1628153909481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "date" character varying NOT NULL DEFAULT '1628153913956'`);
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "updated" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "updated" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "date" TIMESTAMP NOT NULL`);
    }

}
