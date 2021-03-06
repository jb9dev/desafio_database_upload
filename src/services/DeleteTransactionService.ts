import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import AppError from '../errors/AppError';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getRepository(Transaction);
    const transaction = await transactionsRepository.findOne({ where: { id } });

    if (!transaction) {
      throw new AppError('No transactions found with this id!');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
