import { Easing, Notifier, NotifierComponents } from 'react-native-notifier';
const showToastNotification = ({title = 'Message', description, type }:ItoastProps) => {
  Notifier.showNotification({
    title: title,
    description: description,
    duration: 3000,
    showAnimationDuration: 800,
    showEasing: Easing.bounce,
    Component: NotifierComponents.Alert,
    componentProps: {
        alertType: type || 'success',
    },
  });
};

export default showToastNotification;