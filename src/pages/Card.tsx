import { useUserContext } from '../contexts/dashboardContext'
import ReCAPTCHA from 'react-google-recaptcha'
export default function Card() {
  //const user = useContext(DashboardContext)
  const user = useUserContext()

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      {/* <h2>This is card</h2>
        <h3>{user?.name}</h3>

        but we can use customHook then it garantee useContext always return user Object
            now it may be return user object or undefined
            that is why we use ?  */}

      <h2>This is card</h2>
      <ReCAPTCHA
        sitekey="6LcgQ3IpAAAAAMp2MwYCzFu39PzgMrq1XXaJ8_xr"
        onChange={onChange}
      />
      <h3>{user.name}</h3>
    </div>
  )
}
