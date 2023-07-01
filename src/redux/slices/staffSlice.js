import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffs: [
    {
      id: 1,
      imgUrl:
        'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=1380&t=st=1688123206~exp=1688123806~hmac=f6ee4a66b6cb5bbc670eb0808c516146fbdb8f1a7caecf346f850a6f71b0dbe4',
      name: 'Alex',
      surname: 'Sokolov',
      birthday: '11.10.2001',
      department: 'WebDev',
      position: 'Web developer',
      isHead: false,
      isDismissed: false,
      inviteDate: new Date(),
      activities: [
        {
          id: 1,
          text: 'Опоздал',
          type: 'warn',
          date: new Date(),
        },
        {
          id: 2,
          text: 'Принят в организацию',
          type: 'info',
          date: new Date(),
        },
        {
          id: 3,
          text: 'Опоздал',
          type: 'warn',
          date: new Date(),
        },
        {
          id: 4,
          text: 'Принят в организацию',
          type: 'info',
          date: new Date(),
        },
      ],
    },
  ],
  filteringStaffs: [
    {
      id: 1,
      imgUrl:
        'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=1380&t=st=1688123206~exp=1688123806~hmac=f6ee4a66b6cb5bbc670eb0808c516146fbdb8f1a7caecf346f850a6f71b0dbe4',
      name: 'Alex',
      surname: 'Sokolov',
      birthday: '11.10.2001',
      department: 'WebDev',
      position: 'Web developer',
      isHead: false,
      isDismissed: false,
      inviteDate: new Date(),
      activities: [
        {
          id: 1,
          text: 'Опоздал',
          type: 'warn',
          date: new Date(),
        },
        {
          id: 2,
          text: 'Принят в организацию',
          type: 'info',
          date: new Date(),
        },
        {
          id: 3,
          text: 'Опоздал',
          type: 'warn',
          date: new Date(),
        },
        {
          id: 4,
          text: 'Принят в организацию',
          type: 'info',
          date: new Date(),
        },
      ],
    },
  ],
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    clearFilter(state, action) {
      state.filteringStaffs = state.staffs;
    },

    filterStaffsByCategory(state, action) {
      state.filteringStaffs = state.filteringStaffs.filter(
        (staff) => staff.department === action.payload,
      );
    },
  },
});

export const findStaffById = (id) => (state) =>
  state.staffSlice.staffs.find((staff) => staff.id === id);

export const findHeadByDep = (department) => (state) =>
  state.staffSlice.staffs.find((staff) => staff.department === department && staff.isHead);

export const selectStaffData = (state) => state.staffSlice;

export const { clearFilter, filterStaffsByCategory } = staffSlice.actions;

export default staffSlice.reducer;
