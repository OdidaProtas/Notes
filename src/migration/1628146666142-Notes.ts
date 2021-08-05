import {MigrationInterface, QueryRunner} from "typeorm";

export class Notes1628146666142 implements MigrationInterface {
    name = 'Notes1628146666142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."note" ADD "updated" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."note" DROP COLUMN "updated"`);
    }

}
