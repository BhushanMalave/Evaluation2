import {createSlice} from '@reduxjs/toolkit';
import Facebook from '../assets/images/Bitmap.png';
import Twitter from '../assets/images/twitter.png';
import Youtube from '../assets/images/youtube.png';
import Instagram from '../assets/images/instagram.png';
const Image_Icon = [Facebook, Youtube, Twitter, Instagram];

const initialState = [
  {
    id: '1',
    url: 'accounts.facebook.com',
    siteName: 'Facebook',
    folder: 'Social Media',
    userName: 'smrock',
    sitePassword: '12345678',
    notes: '',
    icon: Image_Icon[0],
  },
  {
    id: '2',
    url: 'accounts.youtube.com',
    siteName: 'Youtube',
    folder: 'Social Media',
    userName: 'smrock',
    sitePassword: '12345678',
    notes: '',
    icon: Image_Icon[1],
  },
  {
    id: '3',
    url: 'accounts.twitter.com',
    siteName: 'Twitter',
    folder: 'Social Media',
    userName: 'smrock',
    sitePassword: '12345678',
    notes: '',
    icon: Image_Icon[2],
  },
  {
    id: '4',
    url: 'accounts.instagram.com',
    siteName: 'Instagram',
    folder: 'Social Media',
    userName: 'smrock',
    sitePassword: '12345678',
    notes: '',
    icon: Image_Icon[3],
  },
];

export const Slice = createSlice({
  name: 'site',
  initialState: {
    value: initialState,
    filterValue: initialState,
  },
  reducers: {
    addSite: (state, action) => {
      state.value.push(action.payload);
      state.filterValue.push(action.payload);
    },
    filterSite: (state, action) => {
      state.value = state.filterValue.filter(item =>
        item.siteName.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    deleteSite: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
    },
    editSite: (state, action) => {
      state.value.map(site => {
        if (site.id === action.payload.id) {
          site.url = action.payload.url;
          site.siteName = action.payload.siteName;
          site.folder = action.payload.folder;
          site.userName = action.payload.userName;
          site.sitePassword = action.payload.sitePassword;
          site.notes = action.payload.notes;
        }
      });
    },
  },
});

export const {addSite, editSite, filterSite,deleteSite} = Slice.actions;

export default Slice.reducer;
