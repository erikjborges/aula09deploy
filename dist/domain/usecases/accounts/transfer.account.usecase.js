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
const withdraw_account_usecase_1 = __importDefault(require("./withdraw.account.usecase"));
const deposit_account_usecase_1 = __importDefault(require("./deposit.account.usecase"));
const transactions_repository_1 = __importDefault(require("../../../adapters/repositories/transactions.repository"));
class TransferAccountUseCase {
    constructor(_repositoryAccounts, _repositoryTransactions) {
        this._repositoryAccounts = _repositoryAccounts;
        this._repositoryTransactions = _repositoryTransactions;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let sourceAccount;
            let targetAccount;
            try {
                targetAccount = yield accounts_repository_1.default.readById(data.targetAccountId);
                if (!targetAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta destino.');
                }
                sourceAccount = yield withdraw_account_usecase_1.default.execute({
                    accountId: data.sourceAccountId,
                    value: data.value
                });
                if (!sourceAccount) {
                    throw new Error('Não foi possível encontrar os recursos na conta origem.');
                }
                else if (!('transferLimit' in sourceAccount) || !('transferLimit' in targetAccount)) {
                    throw new Error('Não é possível fazer transferencias envolvendo contas poupança.');
                }
            }
            catch (error) {
                throw error;
            }
            try {
                if (sourceAccount.transferLimit < data.value) {
                    throw new Error(`Valor acima do limite de transferência diário: ${sourceAccount.transferLimit}.`);
                }
                // const transaction: ITransferEntity = {
                //     date: new Date(),
                //     value: data.value,
                //     status: TransactionStatus.Completed,
                //     accountSourceId: sourceAccount.indexId!,
                //     accountSource: sourceAccount,
                //     targetSource: targetAccount,
                //     type: TransactionType.Transfer
                // };
                // this._repositoryTransactions.create(transaction);
                return yield deposit_account_usecase_1.default.execute({
                    accountId: data.targetAccountId,
                    value: data.value
                });
            }
            catch (error) {
                yield deposit_account_usecase_1.default.execute({
                    accountId: data.sourceAccountId,
                    value: data.value
                });
                throw error;
            }
        });
    }
}
exports.default = new TransferAccountUseCase(accounts_repository_1.default, transactions_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuYWNjb3VudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hY2NvdW50cy90cmFuc2Zlci5hY2NvdW50LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw2R0FBb0Y7QUFFcEYsMEZBQWdFO0FBQ2hFLHdGQUE4RDtBQUM5RCxxSEFBNEY7QUFNNUYsTUFBTSxzQkFBc0I7SUFFeEIsWUFDWSxtQkFBd0MsRUFDeEMsdUJBQWdEO1FBRGhELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUU1RCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQXlFOztZQUNuRixJQUFJLGFBQXdDLENBQUM7WUFDN0MsSUFBSSxhQUF3QyxDQUFDO1lBQzdDLElBQUc7Z0JBQ0MsYUFBYSxHQUFHLE1BQU0sNkJBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDeEUsSUFBRyxDQUFDLGFBQWEsRUFBQztvQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7aUJBQy9FO2dCQUVELGFBQWEsR0FBRyxNQUFNLGtDQUFzQixDQUFDLE9BQU8sQ0FBQztvQkFDakQsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO29CQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQztnQkFFSCxJQUFHLENBQUMsYUFBYSxFQUFDO29CQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELENBQUMsQ0FBQztpQkFDOUU7cUJBQU0sSUFBRyxDQUFDLENBQUMsZUFBZSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLElBQUksYUFBYSxDQUFDLEVBQUU7b0JBQ2xGLE1BQU0sSUFBSSxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQztpQkFDdEY7YUFDSjtZQUFDLE9BQU0sS0FBSyxFQUFFO2dCQUNYLE1BQU0sS0FBSyxDQUFDO2FBQ2Y7WUFFRCxJQUFHO2dCQUNDLElBQUcsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFDO29CQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxhQUFhLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztpQkFDckc7Z0JBRUQseUNBQXlDO2dCQUN6Qyx3QkFBd0I7Z0JBQ3hCLHlCQUF5QjtnQkFDekIsMkNBQTJDO2dCQUMzQywrQ0FBK0M7Z0JBQy9DLG9DQUFvQztnQkFDcEMsbUNBQW1DO2dCQUNuQyxxQ0FBcUM7Z0JBQ3JDLEtBQUs7Z0JBQ0wsb0RBQW9EO2dCQUVwRCxPQUFPLE1BQU0saUNBQXFCLENBQUMsT0FBTyxDQUFDO29CQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWU7b0JBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO2FBQ047WUFBQyxPQUFNLEtBQUssRUFBRTtnQkFDWCxNQUFNLGlDQUFxQixDQUFDLE9BQU8sQ0FBQztvQkFDaEMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlO29CQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7aUJBQ3BCLENBQUMsQ0FBQztnQkFDSCxNQUFNLEtBQUssQ0FBQzthQUNmO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixDQUNyQyw2QkFBa0IsRUFDbEIsaUNBQXNCLENBQ3pCLENBQUMifQ==