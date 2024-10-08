import { defineConfigSchema, getSyncLifecycle } from '@openmrs/esm-framework';
import { createDashboardLink } from '@openmrs/esm-patient-common-lib';
import BenefitsPackage from './benefits-package/benefits-package.component';
import BillHistory from './bill-history/bill-history.component';
import BillableServicesCardLink from './billable-services-admin-card-link.component';
import { CancelBillModal } from './billable-services/bill-manager/modals/cancel-bill.modal';
import { DeleteBillModal } from './billable-services/bill-manager/modals/delete-bill.modal';
import { RefundBillModal } from './billable-services/bill-manager/modals/refund-bill.modal';
import { EditBillForm } from './billable-services/bill-manager/workspaces/edit-bill-form.workspace';
import { WaiveBillForm } from './billable-services/bill-manager/workspaces/waive-bill-form.workspace';
import BillableServiceHome from './billable-services/billable-services-home.component';
import DrugOrder from './billable-services/billiable-item/drug-order/drug-order.component';
import ImagingOrder from './billable-services/billiable-item/test-order/imaging-order.component';
import LabOrder from './billable-services/billiable-item/test-order/lab-order.component';
import PriceInfoOrder from './billable-services/billiable-item/test-order/price-info-order.componet';
import ProcedureOrder from './billable-services/billiable-item/test-order/procedure-order.component';
import TestOrderAction from './billable-services/billiable-item/test-order/test-order-action.component';
import BillingCheckInForm from './billing-form/billing-checkin-form.component';
import BillingForm from './billing-form/billing-form.component';
import { configSchema } from './config-schema';
import { benefitsPackageDashboardMeta, dashboardMeta, shrSummaryDashboardMeta } from './dashboard.meta';
import InitiatePaymentDialog from './invoice/payments/initiate-payment/initiate-payment.component';
import VisitAttributeTags from './invoice/payments/visit-tags/visit-attribute.component';
import { createLeftPanelLink } from './left-panel-link.component';
import RequirePaymentModal from './modal/require-payment-modal.component';
import rootComponent from './root.component';
import SHRAuthorizationForm from './shr-summary/shr-authorization-form.workspace';
import SHRSummaryPanell from './shr-summary/shr-summary.component';

const moduleName = '@kenyaemr/esm-billing-app';

const options = {
  featureName: 'billing',
  moduleName,
};

export const importTranslation = require.context('../translations', false, /.json$/, 'lazy');

export const billingSummaryDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...dashboardMeta, moduleName }),
  options,
);

export const shrSummaryDashboardLink = getSyncLifecycle(
  createDashboardLink({ ...shrSummaryDashboardMeta, moduleName }),
  options,
);
// t('billing', 'Billing')
export const billingDashboardLink = getSyncLifecycle(
  createLeftPanelLink({
    name: 'billing',
    title: 'Billing',
  }),
  options,
);

export const benefitsPackageDashboardLink = getSyncLifecycle(
  createDashboardLink({
    ...benefitsPackageDashboardMeta,
    moduleName,
  }),
  options,
);

export const root = getSyncLifecycle(rootComponent, options);
export const billingPatientSummary = getSyncLifecycle(BillHistory, options);
export const billingCheckInForm = getSyncLifecycle(BillingCheckInForm, options);
export const billableServicesHome = getSyncLifecycle(BillableServiceHome, options);

export const billableServicesCardLink = getSyncLifecycle(BillableServicesCardLink, options);
export const billingForm = getSyncLifecycle(BillingForm, options);
export const requirePaymentModal = getSyncLifecycle(RequirePaymentModal, options);
export const visitAttributeTags = getSyncLifecycle(VisitAttributeTags, options);
export const initiatePaymentDialog = getSyncLifecycle(InitiatePaymentDialog, options);

export const labOrder = getSyncLifecycle(LabOrder, options);
export const priceInfoOrder = getSyncLifecycle(PriceInfoOrder, options);
export const procedureOrder = getSyncLifecycle(ProcedureOrder, options);
export const imagingOrder = getSyncLifecycle(ImagingOrder, options);
export const drugOrder = getSyncLifecycle(DrugOrder, options);
export const testOrderAction = getSyncLifecycle(TestOrderAction, options);
export const patientSHRSummary = getSyncLifecycle(SHRSummaryPanell, options);
export const shrAuthorizationForm = getSyncLifecycle(SHRAuthorizationForm, options);

// bill manager modals
export const cancelBillModal = getSyncLifecycle(CancelBillModal, options);
export const deleteBillModal = getSyncLifecycle(DeleteBillModal, options);

// bill manager extensions
export const waiveBillForm = getSyncLifecycle(WaiveBillForm, options);
export const editBillForm = getSyncLifecycle(EditBillForm, options);
export const refundBillModal = getSyncLifecycle(RefundBillModal, options);

// Benefits
export const benefitsPackage = getSyncLifecycle(BenefitsPackage, options);

export function startupApp() {
  defineConfigSchema(moduleName, configSchema);
}
