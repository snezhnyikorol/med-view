import {ControlBaseModel} from '@models/controls/control-base-model';
import {ControlInputModel} from '@models/controls/control-input-model';
import {FormBaseModel} from '@models/forms/form-base.model';

export const addClientFormMetadata: FormBaseModel = {
  groups: {
    generalInfo: {
      name: 'generalInfo',
      title: 'General info',
      controls: {
        firstName: new ControlInputModel({
          key: 'firstName',
          label: 'First name',
          value: '',
          required: true,
        }),

        middleName: new ControlInputModel({
          key: 'middleName',
          label: 'Middle name',
          value: '',
          required: true,
        }),

        lastName: new ControlInputModel({
          key: 'lastName',
          label: 'Last name',
          value: '',
          required: true,
        }),

        gender: new ControlInputModel({
          key: 'gender',
          label: 'Gender',
          value: '',
          required: true,
        }),

        birthday: new ControlInputModel({
          key: 'birthday',
          label: 'Birthday',
          value: '',
          required: true,
        }),

        isRb: new ControlInputModel({
          key: 'isRb',
          label: 'Is RB',
          value: 'true',
          required: true,
        }),
      }
    },

    contactInfo: {
      name: 'contactInfo',
      title: 'Contact Info',
      controls: {
        email: new ControlInputModel({
          key: 'email',
          label: 'Email',
          value: '',
          required: true,
        }),

        mobilePhone: new ControlInputModel({
          key: 'mobilePhone',
          label: 'Mobile phone',
          value: '',
          required: true,
        }),

        addPhone: new ControlInputModel({
          key: 'addPhone',
          label: 'Additional phone',
          value: '',
          required: true,
        }),

        country: new ControlInputModel({
          key: 'country',
          label: 'Country',
          value: '',
          required: true,
        }),

        region: new ControlInputModel({
          key: 'region',
          label: 'Region',
          value: '',
          required: true,
        }),

        city: new ControlInputModel({
          key: 'city',
          label: 'City',
          value: '',
          required: true,
        }),

        index: new ControlInputModel({
          key: 'index',
          label: 'Index',
          value: '',
          required: true,
        }),

        street: new ControlInputModel({
          key: 'street',
          label: 'Street',
          value: '',
          required: true,
        }),

        building: new ControlInputModel({
          key: 'building',
          label: 'Building',
          value: '',
          required: true,
        }),

        apartment: new ControlInputModel({
          key: 'apartment',
          label: 'Apartment',
          value: '',
          required: true,
        }),
      }
    },

    passportData: {
      name: 'passportData',
      title: 'Passport Data',
      controls: {
        passportScan: new ControlInputModel({
          key: 'passportScan',
          label: 'Passport Scan',
          value: '',
          required: true,
        }),

        address: new ControlInputModel({
          key: 'address',
          label: 'Address',
          value: '',
          required: true,
        }),

        passportNumber: new ControlInputModel({
          key: 'passportNumber',
          label: 'series and number of passport',
          value: '',
          required: true,
        }),

        whenIssued: new ControlInputModel({
          key: 'whenIssued',
          label: 'When Issued',
          value: '',
          required: true,
        }),

        issuedBy: new ControlInputModel({
          key: 'issuedBy',
          label: 'Issued By',
          value: '',
          required: true,
        }),
      }
    },

    photo: {
      name: 'photo',
      title: 'Photo',
      controls: {}
    },

    parent: {
      name: 'parent',
      title: 'Parent',
      controls: {

      }
    },

    generalMedicalInfo: {
      name: 'generalMedicalInfo',
      title: 'General Medical Info',
      controls: {
        chronicDiseases: new ControlInputModel({
          key: 'chronicDiseases',
          label: 'Chronic Diseases',
          value: '',
          required: true,
        }),

        bloodGroup: new ControlInputModel({
          key: 'bloodGroup',
          label: 'Blood Group',
          value: '',
          required: true,
        }),

        allergy: new ControlInputModel({
          key: 'allergy',
          label: 'Allergy',
          value: '',
          required: true,
        }),
      }
    },

    paymentInfo: {
      name: 'paymentInfo',
      title: 'Payment Info',
      controls: {
        insuranceCompany: new ControlInputModel({
          key: 'insuranceCompany',
          label: 'Insurance Company',
          value: '',
          required: true,
        }),
      }
    },
  }
};
