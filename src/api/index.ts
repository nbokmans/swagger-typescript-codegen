/* tslint:disable */
export interface LoginInputModel {
    'userName': string;
    'password': string;
    'securityStamp'?: string;
}

export interface SessionModel {
    'accessToken'?: string;
    'refreshToken'?: string;
    'verificationToken'?: string;
    'securityStamp'?: string;
}

export interface RefreshLoginInputModel {
    'refreshToken': string;
}

export interface LogoutInputModel {
    'refreshToken'?: string;
}

export interface ForgotPasswordInputModel {
    'email': string;
}

export interface ResetPasswordInputModel {
    'code': string;
    'email': string;
    'password': string;
    'confirmPassword'?: string;
}

export interface VerifyCodeInputModel {
    'code': string;
    'token': string;
}

export interface NewVerifyCodeInputModel {
    'token': string;
}

export interface AdminModel {
    'id'?: string;
    'firstName'?: string;
    'insertion'?: string;
    'lastName'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'profilePhotoCdnHash'?: string;
    'fullName'?: string;
}

export interface AddAdminInputModel {
    'firstName': string;
    'insertion'?: string;
    'lastName': string;
    'phoneNumber': string;
    'email': string;
    'password': string;
    'passwordConfirm': string;
    'code': string;
}

export interface UserModel {
    'id'?: string;
    'firstName'?: string;
    'insertion'?: string;
    'lastName'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'profilePhotoCdnHash'?: string;
    'fullName'?: string;
}

export interface AdminInvitationModel {
    'id'?: string;
    'code'?: string;
    'emailInvitee'?: string;
    'invitedBy'?: UserModel;
    'invitedOn'?: string;
}

export interface RetrieveAdminInvitationInputModel {
    'code': string;
}

export interface AdminInviteInputModel {
    'email': string;
}

export interface LawyerModel {
    'id'?: string;
    'firstName'?: string;
    'insertion'?: string;
    'lastName'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'profilePhotoCdnHash'?: string;
    'aderantId'?: number;
    'websiteId'?: number;
    'link'?: string;
    'fullName'?: string;
}

export interface AppointmentModel {
    'id'?: string;
    'title'?: string;
    'description'?: string;
    'startDate'?: string;
    'endDate'?: string;
    'createdBy'?: LawyerModel;
    'createdOn'?: string;
    'dossierId'?: number;
}

export interface AddAppointmentInputModel {
    'title': string;
    'description': string;
    'startDate': string;
    'endDate': string;
    'dossierId': number;
}

export interface EditAppointmentInputModel {
    'id': string;
    'title': string;
    'description': string;
    'startDate': string;
    'endDate': string;
}

export interface ServiceAreaModel {
    'id'?: string;
    'name'?: string;
}

export interface ClientModel {
    'id'?: string;
    'name'?: string;
    'aderantClientId'?: number;
    'serviceAreas'?: ServiceAreaModel[];
}

export interface AddClientInputModel {
    'aderantClientId': number;
    'name': string;
    'serviceAreaIds': string[];
}

export interface EditClientInputModel {
    'id': string;
    'serviceAreaIds'?: string[];
}

export interface HbmClientModel {
    'id'?: number;
    'name'?: string;
}

export interface UserGroupRightModel {
    'id'?: string;
    'name'?: string;
}

export interface UserGroupModel {
    'id'?: string;
    'name'?: string;
    'client'?: ClientModel;
    'users'?: UserModel[];
    'rights'?: UserGroupRightModel[];
}

export interface ClientUserModel {
    'id'?: string;
    'firstName'?: string;
    'insertion'?: string;
    'lastName'?: string;
    'email'?: string;
    'phoneNumber'?: string;
    'profilePhotoCdnHash'?: string;
    'clients'?: ClientModel[];
    'userGroups'?: UserGroupModel[];
    'fullName'?: string;
}

export interface AddClientUserInputModel {
    'firstName': string;
    'insertion'?: string;
    'lastName': string;
    'phoneNumber': string;
    'email': string;
    'password': string;
    'passwordConfirm': string;
    'code': string;
}

export interface AddClientsToClientUserInputModel {
    'userId': string;
    'clientIds': string[];
}

export interface ClientUserInvitationModel {
    'id'?: string;
    'code'?: string;
    'emailInvitee'?: string;
    'clients'?: ClientModel[];
    'invitedBy'?: UserModel;
    'invitedOn'?: string;
}

export interface RetrieveClientUserInvitationInputModel {
    'code': string;
}

export interface ClientInviteInputModel {
    'email': string;
    'name': string;
    'clientIds': string[];
}

export interface CollaborationModel {
    'id'?: string;
    'name'?: string;
    'clientId'?: string;
    'clientName'?: string;
    'fileId'?: string;
    'fileName'?: string;
    'lastUpdatedOn'?: string;
}

export interface DisbursementModel {
    'id'?: number;
    'amount'?: number;
    'date'?: string;
    'costId'?: string;
    'costDescription'?: string;
    'status'?: string;
}

export interface DossierOptions {
    'id'?: number;
    'clientId'?: number;
}

export interface DossierModel {
    'id'?: number;
    'code'?: string;
    'name'?: string;
    'responsibleEmployeeId'?: number;
    'responsibleEmployeeFirstName'?: string;
    'responsibleEmployeeMiddleName'?: string;
    'responsibleEmployeeLastName'?: string;
    'responsibleEmployeeCdn'?: string;
    'responsibleEmployeeLink'?: string;
    'clientReference'?: string;
    'openDate'?: string;
    'closeDate'?: string;
    'dossierTypeCode'?: string;
    'dossierType'?: string;
    'dossierContactFirstName'?: string;
    'dossierContactInsertion'?: string;
    'dossierContactLastName'?: string;
    'debtor'?: string;
    'debtorContactFirstName'?: string;
    'debtorContactInsertion'?: string;
    'debtorContactLastName'?: string;
    'clientId'?: number;
    'clientName'?: string;
    'invoicedAmount'?: number;
    'toInvoiceAmount'?: number;
    'totalAmount'?: number;
    'active'?: boolean;
    'totalAmountToBillWorkedHours'?: number;
    'totalAmountBilledWorkedHours'?: number;
    'totalAmountToBillDisbursements'?: number;
    'totalAmountBilledDisbursements'?: number;
    'fileToDeliverCount'?: number;
}

export interface DossierFileModel {
    'id'?: string;
    'title'?: string;
    'description'?: string;
    'seenOn'?: string;
    'dossierId'?: number;
    'uploadedByPhotoCdn'?: string;
    'uploadedByFirstName'?: string;
    'uploadedByInsertion'?: string;
    'uploadedByLastName'?: string;
}

export interface FaqQuestionModel {
    'id'?: string;
    'question'?: string;
    'answer'?: string;
    'faqCategoryId'?: string;
    'order'?: number;
}

export interface FaqCategoryModel {
    'id'?: string;
    'name'?: string;
    'questions'?: FaqQuestionModel[];
    'order'?: number;
}

export interface AddFaqCategoryInputModel {
    'name': string;
}

export interface EditFaqCategoryInputModel {
    'name': string;
    'id': string;
    'order'?: number;
}

export interface EditFaqCategoryOrderInputModel {
    'id': string;
    'order': number;
}

export interface AddFaqQuestionInputModel {
    'question': string;
    'answer': string;
    'faqCategoryId': string;
}

export interface EditFaqQuestionInputModel {
    'question': string;
    'answer': string;
    'id': string;
}

export interface EditFaqQuestionOrderInputModel {
    'id': string;
    'order': number;
}

export interface FighterModel {
    'id'?: number;
    'firstName'?: string;
    'insertion'?: string;
    'lastName'?: string;
    'initials'?: string;
    'email'?: string;
    'numberLike'?: string;
    'number'?: string;
    'avatarSrc'?: string;
    'function'?: string;
    'link'?: string;
    'serviceAreas'?: string[];
}

export interface FileToDeliverModel {
    'id'?: string;
    'title'?: string;
    'description'?: string;
    'createdOn'?: string;
    'deadlineOn'?: string;
    'deliveredOn'?: string;
    'requestedById'?: string;
    'requestedByFirstName'?: string;
    'requestedByInsertion'?: string;
    'requestedByLastName'?: string;
    'requestedByPhotoCdn'?: string;
    'requestedByLink'?: string;
    'dossierId'?: number;
}

export interface AddFileToDeliverInputModel {
    'title': string;
    'description': string;
    'deadlineOn': string;
    'dossierId': number;
    'userIds'?: string[];
}

export interface EditFileToDeliverInputModel {
    'id': string;
    'title': string;
    'description': string;
    'deadlineOn': string;
    'dossierId': number;
}

export interface AskQuestionInputModel {
    'question': string;
}

export interface InvoiceDisbursementModel {
    'id'?: number;
    'amount'?: number;
    'date'?: string;
    'invoiceId'?: number;
    'costId'?: string;
    'costDescription'?: string;
}

export interface WorkedHourModel {
    'id'?: number;
    'invoiceId'?: number;
    'dossierId'?: number;
    'dossierName'?: string;
    'baseHours'?: number;
    'toInvoiceHours'?: number;
    'invoicedHours'?: number;
    'tranDate'?: string;
    'employeeId'?: number;
    'employeeFirstName'?: string;
    'employeeMiddleName'?: string;
    'employeeLastName'?: string;
    'employeeLink'?: string;
    'actionId'?: string;
    'actionDescription'?: string;
    'employeePhotoCdn'?: string;
    'invoicedAmount'?: number;
    'rate'?: number;
    'status'?: string;
    'comment'?: string;
}

export interface InvoiceModel {
    'id'?: number;
    'declarationNumber'?: number;
    'preBillNum'?: number;
    'invoiceDate'?: string;
    'paymentDeadline'?: string;
    'totalAmountExcl'?: number;
    'totalTaxAmount'?: number;
    'totalAmountIncl'?: number;
    'reference'?: string;
    'status'?: string;
    'dossierId'?: number;
    'dossierCode'?: number;
    'dossierName'?: string;
    'clientFirstName'?: string;
    'clientInsertion'?: string;
    'clientLastName'?: string;
    'clientTav'?: string;
    'clientAddress'?: string;
    'clientPostalCode'?: string;
    'clientCity'?: string;
    'payingClientName'?: string;
    'payingClientFirstName'?: string;
    'payingClientInsertion'?: string;
    'payingClientLastName'?: string;
    'payingClientAddress'?: string;
    'payingClientPostalCode'?: string;
    'payingClientCity'?: string;
    'hasInvoiceFile'?: boolean;
    'invoiceDisbursements'?: InvoiceDisbursementModel[];
    'workedHours'?: WorkedHourModel[];
}

export interface AddLawyerInputModel {
    'firstName': string;
    'insertion'?: string;
    'lastName': string;
    'phoneNumber': string;
    'email': string;
    'password': string;
    'passwordConfirm': string;
    'code': string;
}

export interface AderantLawyerModel {
    'id'?: number;
    'name'?: string;
}

export interface LawyerInvitationModel {
    'id'?: string;
    'code'?: string;
    'emailInvitee'?: string;
    'invitedBy'?: UserModel;
    'invitedOn'?: string;
}

export interface RetrieveLawyerInvitationInputModel {
    'code': string;
}

export interface LawyerInviteInputModel {
    'email': string;
    'aderantLawyerId': number;
}

export interface ModelModel {
    'id'?: string;
    'title'?: string;
    'fileId'?: string;
    'serviceAreas'?: ServiceAreaModel[];
    'clients'?: ClientModel[];
}

export interface NewsTitleModel {
    'rendered'?: string;
}

export interface NewsCategoryModel {
    'name'?: string;
}

export interface NewsServiceAreaModel {
    'title'?: string;
}

export interface NewsModel {
    'id'?: number;
    'date'?: string;
    'title'?: NewsTitleModel;
    'korte_beschrijving'?: string;
    'category'?: NewsCategoryModel[];
    'oyemetatpl_servicegebied'?: NewsServiceAreaModel[];
    'link'?: string;
    'featured_image_src'?: string;
}

export interface RightOptions {
    'id'?: string;
    'name'?: string;
    'roleId'?: string;
    'type'?: number;
    'userId'?: string;
}

export interface RightModel {
    'id'?: string;
    'name'?: string;
    'type'?: number;
}

export interface ToolModel {
    'id'?: string;
    'link'?: string;
    'description'?: string;
    'cdnHash'?: string;
    'serviceAreas'?: ServiceAreaModel[];
    'clients'?: ClientModel[];
}

export interface EditUserPasswordInputModel {
    'id': string;
    'currentPassword': string;
    'newPassword': string;
    'newPasswordConfirm': string;
}

export interface EditUserPasswordByAdminInputModel {
    'id': string;
    'newPassword': string;
    'newPasswordConfirm': string;
}

export interface UserDossierRightModel {
    'id'?: string;
    'dossierId'?: number;
    'name'?: string;
    'user'?: UserModel;
}

export interface UserDossierRightEntryModel {
    'id'?: string;
    'dossierId'?: number;
    'dossier'?: DossierModel;
    'user'?: UserModel;
    'userDossierRights'?: UserDossierRightModel[];
}

export interface AddUserDossierRightEntryInputModel {
    'userIds': string[];
}

export interface EditUserDossierRight {
    'entryId'?: string;
    'rightId'?: string;
}

export interface EditAllUserDossierRightsInputModel {
    'rights'?: EditUserDossierRight[];
}

export interface AddDossierRightEntriesToUserInputModel {
    'dossierIds'?: number[];
}

export interface AddUserGroupInputModel {
    'name': string;
}

export interface AddUsersToUserGroupInputModel {
    'userIds': string[];
}

export interface EditUserGroupInputModel {
    'name': string;
}

export interface UserGroupDossierRightModel {
    'id'?: string;
    'dossierId'?: number;
    'userGroup'?: UserGroupModel;
    'name'?: string;
}

export interface UserGroupDossierRightEntryModel {
    'id'?: string;
    'dossier'?: DossierModel;
    'userGroup'?: UserGroupModel;
    'userGroupDossierRights'?: UserGroupDossierRightModel[];
}

export interface AddUserGroupDossierRightEntryInputModel {
    'userGroupIds': string[];
}

export interface EditUserGroupDossierRight {
    'rightId'?: string;
    'entryId'?: string;
}

export interface EditAllUserGroupDossierRightsInputModel {
    'rights'?: EditUserGroupDossierRight[];
}

export interface AddDossierRightEntriesToUserGroupInputModel {
    'dossierIds'?: number[];
}

export interface EditAllUserGroupRightsInputModel {
    'rightIds'?: string[];
}

export interface UserRightModel {
    'id'?: string;
    'name'?: string;
}

export interface EditAllUserRightsInputModel {
    'rightIds': string[];
    'userId': string;
}

export interface AddUserRightInputModel {
    'rightId': string;
}

export interface DeleteUserRightInputModel {
    'rightId': string;
}