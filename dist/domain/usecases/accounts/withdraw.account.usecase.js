"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_repository_1 = __importDefault(require("../../../adapters/repositories/accounts.repository"));
const transactions_repository_1 = __importDefault(require("../../../adapters/repositories/transactions.repository"));
class WithdrawAccountUseCase {
    constructor(_repositoryAccounts, _repositoryTransactions) {
        this._repositoryAccounts = _repositoryAccounts;
        this._repositoryTransactions = _repositoryTransactions;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.value <= 0) {
                throw new Error("O valor deve ser maior que zero.");
            }
            const account = yield accounts_repository_1.default.readById(data.accountId);
            if (!account) {
                throw new Error("Conta não encontrada para saque.");
            }
            else if (account.balance < data.value) {
                throw new Error("Você não tem saldo suficiente para esse saque.");
            }
            account.balance -= data.value;
            /**
             * Aqui teria algum comando para envio do dinheiro para o cliente em um ambiente real.
             */
            //  const transaction: IWithdrawEntity = {
            //     date: new Date(),
            //     value: data.value,
            //     status: TransactionStatus.Completed,
            //     accountSourceId: account.indexId!,
            //     accountSource: account,
            //     type: TransactionType.Withdraw
            // };
            // this._repositoryTransactions.create(transaction);
            return accounts_repository_1.default.updateById(account);
        });
    }
}
exports.default = new WithdrawAccountUseCase(accounts_repository_1.default, transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXcuYWNjb3VudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hY2NvdW50cy93aXRoZHJhdy5hY2NvdW50LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2R0FBb0Y7QUFNcEYscUhBQTRGO0FBRTVGLE1BQU0sc0JBQXNCO0lBRXhCLFlBQ1ksbUJBQXdDLEVBQ3hDLHVCQUFnRDtRQURoRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFFNUQsQ0FBQztJQUVLLE9BQU8sQ0FBQyxJQUEwQzs7WUFDcEQsSUFBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ3ZEO1lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSw2QkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWxFLElBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNyQyxNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7YUFDckU7WUFFRCxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFOUI7O2VBRUc7WUFFSCwwQ0FBMEM7WUFDMUMsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QiwyQ0FBMkM7WUFDM0MseUNBQXlDO1lBQ3pDLDhCQUE4QjtZQUM5QixxQ0FBcUM7WUFDckMsS0FBSztZQUNMLG9EQUFvRDtZQUVwRCxPQUFPLDZCQUFrQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksc0JBQXNCLENBQ3JDLDZCQUFrQixFQUNsQixpQ0FBc0IsQ0FDekIsQ0FBQyJ9