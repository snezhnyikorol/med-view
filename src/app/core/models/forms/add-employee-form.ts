import {ControlBaseModel} from '@models/controls/control-base-model';
import {ControlInputModel} from '@models/controls/control-input-model';
import {FormBaseModel} from '@models/forms/form-base.model';

// export const addEmployeeFormMetadata: ControlBaseModel<string>[] = [
//
//   new ControlInputModel({
//     key: 'firstName',
//     label: 'First name',
//     value: '',
//     required: true,
//     order: 1
//   }),
//
//   new ControlInputModel({
//     key: 'middleName',
//     label: 'Middle name',
//     value: '',
//     required: true,
//     order: 2
//   }),
//
//   new ControlInputModel({
//     key: 'lastName',
//     label: 'Last name',
//     value: '',
//     required: true,
//     order: 2
//   }),
//              // image in Base64 format?
// // firstName: string;
// // middleName: string;
// // lastName: string;
// // birthday: string;             // Date in ISO format поом объясню почему
// // gender: string;
// // tags: TagModel[];
// // maritalStatus: string;        // Семейное положение
// // contact: ContactModel;
// // address: {
// //   registration: AddressModel;
// //   actual: AddressModel;
// // };
//
// ];

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
    }
  }
};
