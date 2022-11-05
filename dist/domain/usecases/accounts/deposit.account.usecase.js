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
class DepositAccountUseCase {
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
                throw new Error("Conta não encontrada para depósito.");
            }
            // const transaction: IDepositEntity = {
            //     date: new Date(),
            //     value: data.value,
            //     status: TransactionStatus.Completed,
            //     accountSourceId: account.indexId!,
            //     accountSource: account,
            //     type: TransactionType.Deposit,
            //     envelope: 123
            // };
            // this._repositoryTransactions.create(transaction);
            account.balance += data.value;
            return accounts_repository_1.default.updateById(account);
        });
    }
}
exports.default = new DepositAccountUseCase(accounts_repository_1.default, transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwb3NpdC5hY2NvdW50LnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9tYWluL3VzZWNhc2VzL2FjY291bnRzL2RlcG9zaXQuYWNjb3VudC51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsNkdBQW9GO0FBTXBGLHFIQUE0RjtBQUU1RixNQUFNLHFCQUFxQjtJQUV2QixZQUNZLG1CQUF3QyxFQUN4Qyx1QkFBZ0Q7UUFEaEQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBRTVELENBQUM7SUFFSyxPQUFPLENBQUMsSUFBMEM7O1lBQ3BELElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQzthQUN2RDtZQUNELE1BQU0sT0FBTyxHQUFHLE1BQU0sNkJBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNsRSxJQUFHLENBQUMsT0FBTyxFQUFDO2dCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQzthQUMxRDtZQUVELHdDQUF3QztZQUN4Qyx3QkFBd0I7WUFDeEIseUJBQXlCO1lBQ3pCLDJDQUEyQztZQUMzQyx5Q0FBeUM7WUFDekMsOEJBQThCO1lBQzlCLHFDQUFxQztZQUNyQyxvQkFBb0I7WUFDcEIsS0FBSztZQUNMLG9EQUFvRDtZQUVwRCxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDOUIsT0FBTyw2QkFBa0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLHFCQUFxQixDQUNwQyw2QkFBa0IsRUFDbEIsaUNBQXNCLENBQ3pCLENBQUMifQ==