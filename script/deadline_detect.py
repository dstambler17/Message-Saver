import numpy as np 
import re 
from urllib.parse import urlparse

### 1) Take in a string input and detect whether any specific deadlines are within that string 
### 2) Checks if the string is a link or a basic text message. 
### 3) If string is a link, check if its a image link 
### 4) Check if string contains any time/date text message. 


def deadline_detection ( inputted_string ) : 
    ### Initial Variables 
    days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] 
    time_table_1 = list( map(str, list(np.arange(24)) ) ) 
    time_table_2 = list( map(str, list(np.arange(1,13)) ) ) 

    ### 1) Checks if the string is a link or a basic text message.
    if bool(urlparse(inputted_string).scheme )  : 
        ### 1.1) Check if the link is an image or not. 
        if re.findall("(.jpg|.png|.gif)", inputted_string) != [] : 
            return "image"
        else : 
            return "link"

    ### 2) String is not a link. Check if string has any specific deadlines. 
    else : 
        inputted_string = inputted_string.lower() 

        ### 2.1) Check if the string has any day of the week in it.
        if re.findall( r"(?=(\b" + '|'.join(days) + r"\b))", inputted_string ) : 
            return "date"
        
        ### 2.2) Check if the string has a X:XX time format in it.  
        elif re.findall( r"(?=(\b" + '|'.join(time_table_1) + ":" r"\b))", inputted_string ) : 
            return "time"

        ### 2.3) Check if the string has a X AM or X PM time format in it. 
        elif re.findall( r"(?=(\b" + '|'.join(time_table_2) + "AM| PM|AM|PM" r"\b))", inputted_string) :   
            return "time"

    return "none"

def main() : 
    ### Some Test Cases
    print( deadline_detection("https://github.com/dstambler17/Message-Saver") )
    print( deadline_detection("https://vignette.wikia.nocookie.net/harrypotter/images/9/97/Harry_Potter.jpg/revision/latest?cb=20140603201724") )
    print( deadline_detection("Are you free on Thursday?"))
    print( deadline_detection("yo man lets hit it up at 2:00"))
    print( deadline_detection("Let's meet up at 7 PM") )
    


if __name__ == "__main__" :
    main() 


    

