import * as React from "react";
import { Text, StyleSheet, View,TouchableOpacity  } from "react-native";
import Depth1Frame7 from "../components/Depth1Frame7";
import { useNavigation } from "@react-navigation/native";

import { Color, Border, Padding, FontSize, FontFamily } from "../GlobalStyles";

const FriendRequestPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.friendrequestpage}>
      <View style={styles.depth0Frame0}>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>

        <Depth1Frame7
          depth4Frame0={require("../assets/depth-4-frame-08.png")}
          requestDetails="Request Details"
        />
        </TouchableOpacity>
        <View style={styles.depth1Frame1}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.samanthaAdams, styles.samanthaFlexBox]}>
              Samantha Adams
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame2}>
          <View style={styles.depth2Frame0}>
            <Text style={[styles.samanthaWouldLike, styles.samanthaFlexBox]}>
              Samantha would like to collaborate with you on a project. Are you
              interested?
            </Text>
          </View>
        </View>
        <View style={styles.depth1Frame3}>
          <View style={styles.depth2Frame02}>
            <View style={[styles.depth3Frame0, styles.frameFlexBox]}>
              <View style={[styles.depth4Frame0, styles.depth4FrameSpaceBlock]}>
                <View style={[styles.depth5Frame0, styles.frameBg1]}>
                  <View style={styles.depth2Frame0}>
                    <Text style={[styles.decline, styles.declineTypo]}>
                      Reject
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.depth3Frame1, styles.frameLayout]}>
              <View style={[styles.depth4Frame01, styles.frameBg]}>
                <View style={[styles.depth5Frame01, styles.frameBg]}>
                  <View style={styles.depth2Frame0}>
                    <Text style={[styles.collaborate, styles.declineTypo]}>
                      Accept
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.depth1Frame4} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  samanthaFlexBox: {
    textAlign: "left",
    color: Color.colorGray_400,
  },
  frameFlexBox: {
    justifyContent: "center",
    width: 85,
    height: 40,
    flexDirection: "row",
  },
  depth4FrameSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  frameBg1: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
  },
  declineTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  frameLayout: {
    width: 114,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  frameBg: {
    backgroundColor: Color.colorDodgerblue,
    overflow: "hidden",
  },
  samanthaAdams: {
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "left",
  },
  depth2Frame0: {
    alignSelf: "stretch",
  },
  depth1Frame1: {
    height: 'auto',
    paddingTop: Padding.p_xl,
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 'auto',
  },
  samanthaWouldLike: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
  },
  depth1Frame2: {
    paddingTop: Padding.p_9xs,
    height: 'auto',
    paddingBottom: Padding.p_xs,
    paddingHorizontal: Padding.p_base,
    width: 'auto',
  },
  decline: {
    color: Color.colorGray_400,
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  depth5Frame0: {
    width: 'auto',
    height: 'auto',
  },
  depth4Frame0: {
    backgroundColor: Color.colorAliceblue,
    overflow: "hidden",
    justifyContent: "center",
    width: 85,
    height: 40,
    flexDirection: "row",
  },
  depth3Frame0: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  collaborate: {
    color: Color.colorWhitesmoke_100,
  },
  depth5Frame01: {
    width: 'auto',
    height: 'auto',
  },
  depth4Frame01: {
    width: 'auto',
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    paddingVertical: 0,
    alignItems: "center",
    borderRadius: Border.br_xs,
    paddingHorizontal: Padding.p_base,
  },
  depth3Frame1: {
    left: 97,
    top: 0,
    position: "absolute",
  },
  depth2Frame02: {
    width: 211,
    height: 40,
  },
  depth1Frame3: {
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    height: 64,
    paddingHorizontal: Padding.p_base,
    width: 390,
  },
  depth1Frame4: {
    height: 20,
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  depth0Frame0: {
    height: 844,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  friendrequestpage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
  },
});

export default FriendRequestPage;
