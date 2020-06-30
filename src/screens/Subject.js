import React from 'react'
import { View ,StyleSheet ,ScrollView } from 'react-native'

import SubjectHeader from '../components/SubjectHeader'
import SubjectCard from '../components/SubjectCard'

const subject = {
    "uri" : "https://i.ibb.co/kBqN5f9/IMG-20200108-WA0005.jpg",
    "title" : "Andoid",
    "unit" : "6 Units",
    "videos" : "12 Videos"
  }

export default function Subject() {
    return (
        <View>
            <View>
                <SubjectHeader SubjectName={'Andoid'}/>
            </View>
            <ScrollView>
                <SubjectCard Subject={subject}/>
                <SubjectCard Subject={subject}/>
                <SubjectCard Subject={subject}/>
                <SubjectCard Subject={subject}/>
                <SubjectCard Subject={subject}/>
                <SubjectCard Subject={subject}/>
            </ScrollView>
        </View>
    );
};

