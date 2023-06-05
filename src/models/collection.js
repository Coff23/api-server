'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const newRecord = await this.model.create(data);
      return newRecord;

    } catch (error) {
      console.error('We have an error in Collection', error);

      return error;
    }
  }

  async read(id=null){
    try {
      if(id) {
        const singleRecord = await this.model.findByPk(id);
        return singleRecord;
      } else {
        const records = await this.model.findAll();
        return records;
      }
    } catch (error) {
      console.error('We have an error in Collection', error);
      return error;
    }
  }

  async update(id, data) {
    try {
      const record = await this.model.findByPk(id);
      if (record) {
        await record.update(data);
        return record;
      } else {
        throw new Error('Record not found');
      }
    } catch (error) {
      console.error('We have an error in Collection', error);
      return error;
    }
  }

  async delete(id) {
    try {
      const record = await this.model.findByPk(id);
      if (record) {
        await record.destroy();
        return true;
      } else {
        throw new Error('Record not found');
      }
    } catch (error) {
      console.error('We have an error in Collection', error);
      return error;
    }
  }
}

module.exports = Collection;
