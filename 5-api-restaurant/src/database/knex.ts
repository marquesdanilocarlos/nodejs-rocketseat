import {knex, Knex} from 'knex';
import knexfile from "../../knexfile";

const knexInstance:Knex  = knex(knexfile);

export default knexInstance;
