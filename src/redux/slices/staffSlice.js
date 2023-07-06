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
        dismissedStaff.department = '';
        dismissedStaff.dismissDate = new Date().toLocaleDateString('ru-RU');
      }
      localStorage.setItem('staffs', JSON.stringify(state.staffs));
    },

    fetchStaffs(state) {
      state.staffs = JSON.parse(localStorage.getItem('staffs') ?? '[]');
    },

    addStaff(state, action) {
      state.staffs.unshift({
        ...action.payload,
        isHead: false,
        isDismissed: false,
        imgUrl:
          'https://cdn-icons-png.flaticon.com/512/727/727399.png?w=826&t=st=1688542551~exp=1688543151~hmac=23a84327479838450e0208891778baca318cb30cc65416fb26acd4f4924c91e6',
        activities: [
          {
            id: 1,
            type: 'info',
            text: 'Принят в организацию',
            date: new Date().toLocaleDateString('ru-RU'),
          },
        ],
        inviteDate: new Date().toLocaleDateString('ru-RU'),
        dismissDate: null,
      });
      localStorage.setItem('staffs', JSON.stringify(state.staffs) ?? '[]');
    },

    toggleHead(state, action) {
      const staffHead = state.staffs.find((staff) => staff.id === action.payload);
      if (!staffHead.isHead) {
        staffHead.isHead = true;
      } else {
        staffHead.isHead = false;
      }
      localStorage.setItem('staffs', JSON.stringify(state.staffs) ?? '[]');
    },

    addWarn(state, action) {
      const warnStaff = state.staffs.find((staff) => staff.id === action.payload.id);
      if (warnStaff) {
        warnStaff.activities.unshift(action.payload.warn);
      }
      localStorage.setItem('staffs', JSON.stringify(state.staffs) ?? '[]');
    },

    clearStaffs(state) {
      localStorage.removeItem('staffs', JSON.stringify(state.staffs) ?? '[]');
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

export const findStaffByDep = (department) => (state) =>
  state.staffSlice.staffs.filter((staff) => staff.department === department);

export const getLengthStaffsByDep = (department) => findStaffByDep(department).length;

export const selectStaffData = (state) => state.staffSlice;

export const {
  clearFilter,
  filterStaffsByCategory,
  dissmission,
  fetchStaffs,
  addStaff,
  toggleHead,
  addWarn,
  clearStaffs,
} = staffSlice.actions;

export default staffSlice.reducer;
