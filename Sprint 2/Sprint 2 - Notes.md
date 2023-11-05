Sprint 2 - 

This sprint was an uphill battle for me. My first challenge was reading and displaying accelerometer data and testing movement with an android virtual device. The accelerometer data wasn't showing as expected and the command to "shake" the andriod virtual device also didn't seem to be working properly and instead bringing up a settings menu.

The other challenge that I didn't even realize I had created for myself was navigating between screens. This is where I realized I had a lot more to learn and that I may have started out my project missing some important dependencies for navigating between screens in my React Native app. 

I was able to get one screen setup for my app with two distinct buttons, but navigating between 2 or more screens requires the react native navigation dependencies and coding is different enough that going back and adding the navigation code and dependencies was a struggle for me. 

For navigation, we will need several dependencies. I followed the guide on reactnavigation.org and ran the following commands:
	npm install @react-navigation/native
	npm install react-native-screens react-native-safe-area-context
	npm install @react-navigation/native-stack

After adding those dependencies I made some significant changes to my code....and wouldn't you know it wouldn't build :(
The changes to my code are most likely not the culprit, but more likely related to upgrade to the gradle build and a conflict with Kotlin. There is a lot going on behind the scenes on the android side which React Native handles for the most part, but in my haste to get through some of my errors I thought I may need to upgrade the gradle version and I believe that's where I introduced new problems. 

So going back to the part about my haste to "fix" my project build errors, I don't want to introduce any potential new issues and starting from scratch may be the easiest way to accomplish that. So I created a new react-native project. I then opened the android folder in android studio to ensure any dependencies are added, specifically the local.properties file. Next I installed the 3 react navigation dependencies I mentioned above. Now I should have a good starting point to begin to add my code.

After adding in my code I was still getting some errors related to a file path that needed to be updated and a missing export in my App.tsx file. Fixed both of those and I was graced with a working app again. 

From here I just needed to focus on getting the accelerometer data to display on the GamePlay screen and detect when the device is moved. 

My plan right now is to take a variable to store the time from when the navigation is changed to the GamePlay screen and the time from when the phone is moved and calculate the total time from there. The GamePlay time should be displayed to the user while the phone isn't being touched and then the final time spent not using the phone should be displayed once the phone is moved. I will need another button to navigate back to the Home screen to hit the Solo button again and play again. Once I can get that all working I will go back and clean up the styling of the app to get the design looking good again.

Before I forget I'm going to need to make sure my changes with a working ugly app are captured in GitHub in-case I make any other changes and need to revert back to a known working build. 