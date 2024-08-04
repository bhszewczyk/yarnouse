import { Repository } from 'typeorm';

interface ColumnValue {
  key: string;
  value: string | number;
}

interface QueryFindOptions {
  repository: Repository<any>;
  initialQuery: ColumnValue;
  queries?: string[];
}

export const checkIfRecordExists = async ({
  repository,
  initialQuery,
}: QueryFindOptions) => {
  const { key, value } = initialQuery;
  return await repository.findOneBy({ [key]: value });
};
