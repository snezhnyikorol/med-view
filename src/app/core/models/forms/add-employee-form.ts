import {ControlBaseModel} from '@models/controls/control-base-model';
import {ControlInputModel} from '@models/controls/control-input-model';
import {FormBaseModel} from '@models/forms/form-base.model';


export const addEmployeeFormMetadata: FormBaseModel = {
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

        maritalStatus: new ControlInputModel({
          key: 'maritalStatus',
          label: 'Marital Status',
          value: '',
          required: true,
        }),
      }
    },
    jobData: {
      name: 'jobData',
      title: 'Job Data',
      controls: {
        position: new ControlInputModel({
          key: 'position',
          label: 'Position',
          value: '',
          required: true,
        }),

        academicDegree: new ControlInputModel({
          key: 'academicDegree',
          label: 'Academic Degree',
          value: '',
          required: true,
        }),

        category: new ControlInputModel({
          key: 'category',
          label: 'Category',
          value: '',
          required: true,
        }),

        address: new ControlInputModel({
          key: 'address',
          label: 'Address',
          value: '',
          required: true,
        }),
      }
    },
    contactInfo: {
      name: 'contactInfo',
      title: 'Contact Info',
      controls: {
        country: new ControlInputModel({
          key: 'country',
          label: 'Country',
          value: '',
          required: true,
        }),

        city: new ControlInputModel({
          key: 'city',
          label: 'City',
          value: '',
          required: true,
        }),

        address: new ControlInputModel({
          key: 'address',
          label: 'Address',
          value: '',
          required: true,
        }),

        addPhone: new ControlInputModel({
          key: 'addPhone',
          label: 'Additional phone',
          value: '',
          required: true,
        }),

        skype: new ControlInputModel({
          key: 'skype',
          label: 'Skype',
          value: '',
          required: true,
        }),

        passportData: new ControlInputModel({
          key: 'passportData',
          label: 'Passport Data',
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
    userPermissions: {
      name: 'userPermissions',
      title: 'User Permissions',
      controls: {}
    },
  }
};
