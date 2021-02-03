
const GET_COUNTIES = 'SELECT * FROM county';
const UPDATE_COUNTY = 'UPDATE county SET name = :name, deleted_at = :deleted WHERE id = :id';
const INSERT_COUNTY = 'INSERT INTO county(name, deleted_at) VALUES(:name, :deleted)';
const DELETE_COUNTY = 'DELETE FROM county WHERE id = :id';

export {
    GET_COUNTIES,
    UPDATE_COUNTY,
    DELETE_COUNTY,
    INSERT_COUNTY
};