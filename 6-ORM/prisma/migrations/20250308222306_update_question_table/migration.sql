-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
