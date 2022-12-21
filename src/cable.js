import { createConsumer } from '@rails/actioncable'
const URL = // ici l'url websocket  
const consumer = createConsumer(URL)
 
export default consumer