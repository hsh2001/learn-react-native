
# You have to install 'Android studio' first.
#   https://developer.android.com/studio/index.html


sudo echo "Need sudo";

# install node & watchman
brew install node;
brew install watchman;

# install RN global modules
sudo npm i -g react-native;
sudo npm i -g react-native-cli;

# setting Android
brew tap AdoptOpenJDK/openjdk;
brew cask install adoptopenjdk8;
export ANDROID_HOME=$HOME/Library/Android/sdk;
export PATH=$PATH:$ANDROID_HOME/emulator;
export PATH=$PATH:$ANDROID_HOME/tools;
export PATH=$PATH:$ANDROID_HOME/tools/bin;
export PATH=$PATH:$ANDROID_HOME/platform-tools;

# setting NPM
sudo rm -rf /node_modules;
npm install;

# setting CocoaPods
sudo gem install cocoapods;
cd ios;
sudo rm -rf /build;
sudo rm -rf /Pods;
pod install;
cd ..;
