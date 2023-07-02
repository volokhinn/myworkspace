import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  staffs: [],
  filteringStaffs: [],
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    clearFilter(state) {
      state.filteringStaffs = state.staffs.filter((staff) => !staff.isDismissed);
    },

    filterStaffsByCategory(state, action) {
      state.filteringStaffs = state.filteringStaffs.filter(
        (staff) => staff.department === action.payload && !staff.isDismissed,
      );
    },

    dissmission(state, action) {
      const dismissedStaff = state.staffs.find((staff) => staff.id === action.payload);
      if (dismissedStaff) {
        dismissedStaff.isDismissed = true;
        dismissedStaff.isHead = false;
        dismissedStaff.dismissDate = new Date().toLocaleDateString('ru-RU');
        console.log(dismissedStaff.isDismissed);
      }
      localStorage.setItem('staffs', JSON.stringify(state.staffs));
    },

    fetchStaffs(state) {
      state.staffs = JSON.parse(localStorage.getItem('staffs') ?? '[]');
    },

    addStaff(state, action) {
      state.staffs.push({
        ...action.payload,
        isHead: false,
        isDismissed: false,
        imgUrl:
          'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=1380&t=st=1688285757~exp=1688286357~hmac=f88556b4d0514155383a7681f3c1ea952ea320dbca399d260f28dd06989c0b61',
        activities: [
          {
            id: 1,
            type: 'info',
            text: 'Принят в организацию',
            date: new Date().toLocaleDateString('ru-RU'),
          },
        ],
        inviteDate: new Date(),
        dismissDate: null,
      });
      localStorage.setItem('staffs', JSON.stringify(state.staffs));
    },

    toggleHead(state, action) {
      const staffHead = state.staffs.find((staff) => staff.id === action.payload);
      if (!staffHead.isHead) {
        staffHead.isHead = true;
      } else {
        staffHead.isHead = false;
      }
      localStorage.setItem('staffs', JSON.stringify(state.staffs));
    },

    addWarn(state, action) {
      const warnStaff = state.staffs.find((staff) => staff.id === action.payload.id);
      if (warnStaff) {
        warnStaff.activities.push(action.payload.warn);
      }
      localStorage.setItem('staffs', JSON.stringify(state.staffs));
    },
  },
});

export const findAllByDismiss = (isDismissed) => (state) =>
  state.staffSlice.staffs.filter((staff) => staff.isDismissed === isDismissed);

export const findAllHeads = (isHead) => (state) =>
  state.staffSlice.staffs.filter((staff) => staff.isHead === isHead);

export const findStaffById = (id) => (state) =>
  state.staffSlice.staffs.find((staff) => staff.id === id);

export const findHeadByDep = (department) => (state) =>
  state.staffSlice.staffs.find((staff) => staff.department === department && staff.isHead);

export const selectStaffData = (state) => state.staffSlice;

export const {
  clearFilter,
  filterStaffsByCategory,
  dissmission,
  fetchStaffs,
  addStaff,
  toggleHead,
  addWarn,
} = staffSlice.actions;

export default staffSlice.reducer;
