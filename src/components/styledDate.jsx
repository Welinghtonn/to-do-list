import { styled } from '@mui/material/styles'
import { DesktopDatePicker, LocalizationProvider, PickersLayout } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';

/* Because of the structure of the DesktopDatePicker and the way the popper renders, the
`layout` slot will need to be replaced with a wtyled component */
const StyledPickersLayout = styled(PickersLayout)({
    '.MuiPickersDay-root': {
        color: '#000000',
        borderRadius: '1px',
        borderWidth: '1px',
        borderColor: '#000000',
        border: '1px solid',
        width: "100%",
        height: "100%",
    },

    ".MuiDateCalendar-root":{
        width: "90%",
        height: "245px",
    }
})

export default function StyledPickerContainer({inputDate, setInputDate}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker className="dateInput"
                    value={inputDate ? dayjs(inputDate, 'DD-MM-YYYY') : null}
                    onChange={(newValue) => {
                        setInputDate(newValue ? newValue.format('DD-MM-YYYY') : '');
                    }}
                    slots={{
                        layout: StyledPickersLayout,
                    }}
                />
           
        </LocalizationProvider>
  );
}