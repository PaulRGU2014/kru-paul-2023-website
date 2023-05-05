
import LightLayout from "./LightLayout";
import DarkLayout from "./DarkLayout";

export default function Layout (theme) {
    switch (theme) {
      case 'dark':
        return (page) => 
          <DarkLayout>{page}</DarkLayout>
      default:
        return (page) => 
          <LightLayout>{page}</LightLayout>      
    }
}