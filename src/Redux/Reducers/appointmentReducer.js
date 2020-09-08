import {
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENTS_PENDING,
  POST_APPLICATION,
  POST_APPOINTMENT,
} from "../../Constants/actionTypes";

export default function appointmentReducer(state = {}, action) {
  switch (action.type) {
    case GET_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        appointmentsData: {
          appArray: action.data.value,
          requestSuccessful: true,
        },
      };
    case POST_APPOINTMENT:
      return {
        ...state,
        newAppointment: action.payload,
        requestSuccessful: true,
      };
    case GET_APPOINTMENTS_PENDING:
      return {
        ...state,
        appointmentsData: {
          requestPending: true,
        },
      };
    case "APPOINTMENT_MODAL_CHANGE":
      return {
        appointmentsData: {
          ...state.appointmentsData,
          openAppointmentPopup: action.open,
        },
      };
    default:
      return {
        ...state,
        appointmentsData: {
          requestPending: true,
        },
      };
  }
}