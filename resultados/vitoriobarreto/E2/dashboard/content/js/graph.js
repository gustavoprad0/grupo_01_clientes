/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 822.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 7.0], [1.0, 7.0], [1.1, 7.0], [1.2, 7.0], [1.3, 7.0], [1.4, 7.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 8.0], [2.7, 8.0], [2.8, 8.0], [2.9, 8.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 9.0], [7.8, 9.0], [7.9, 9.0], [8.0, 9.0], [8.1, 9.0], [8.2, 9.0], [8.3, 9.0], [8.4, 9.0], [8.5, 9.0], [8.6, 9.0], [8.7, 9.0], [8.8, 9.0], [8.9, 9.0], [9.0, 9.0], [9.1, 9.0], [9.2, 9.0], [9.3, 9.0], [9.4, 9.0], [9.5, 9.0], [9.6, 9.0], [9.7, 9.0], [9.8, 9.0], [9.9, 9.0], [10.0, 9.0], [10.1, 9.0], [10.2, 9.0], [10.3, 9.0], [10.4, 9.0], [10.5, 9.0], [10.6, 9.0], [10.7, 9.0], [10.8, 9.0], [10.9, 9.0], [11.0, 9.0], [11.1, 10.0], [11.2, 10.0], [11.3, 10.0], [11.4, 10.0], [11.5, 10.0], [11.6, 10.0], [11.7, 10.0], [11.8, 10.0], [11.9, 10.0], [12.0, 10.0], [12.1, 10.0], [12.2, 10.0], [12.3, 10.0], [12.4, 10.0], [12.5, 10.0], [12.6, 10.0], [12.7, 10.0], [12.8, 10.0], [12.9, 10.0], [13.0, 10.0], [13.1, 10.0], [13.2, 10.0], [13.3, 10.0], [13.4, 10.0], [13.5, 10.0], [13.6, 10.0], [13.7, 10.0], [13.8, 10.0], [13.9, 10.0], [14.0, 10.0], [14.1, 10.0], [14.2, 10.0], [14.3, 10.0], [14.4, 10.0], [14.5, 10.0], [14.6, 10.0], [14.7, 10.0], [14.8, 10.0], [14.9, 10.0], [15.0, 10.0], [15.1, 10.0], [15.2, 10.0], [15.3, 10.0], [15.4, 10.0], [15.5, 10.0], [15.6, 10.0], [15.7, 10.0], [15.8, 10.0], [15.9, 10.0], [16.0, 10.0], [16.1, 10.0], [16.2, 10.0], [16.3, 10.0], [16.4, 10.0], [16.5, 10.0], [16.6, 10.0], [16.7, 10.0], [16.8, 10.0], [16.9, 10.0], [17.0, 10.0], [17.1, 10.0], [17.2, 10.0], [17.3, 10.0], [17.4, 10.0], [17.5, 10.0], [17.6, 10.0], [17.7, 11.0], [17.8, 11.0], [17.9, 11.0], [18.0, 11.0], [18.1, 11.0], [18.2, 11.0], [18.3, 11.0], [18.4, 11.0], [18.5, 11.0], [18.6, 11.0], [18.7, 11.0], [18.8, 11.0], [18.9, 11.0], [19.0, 11.0], [19.1, 11.0], [19.2, 11.0], [19.3, 11.0], [19.4, 11.0], [19.5, 11.0], [19.6, 11.0], [19.7, 11.0], [19.8, 11.0], [19.9, 11.0], [20.0, 11.0], [20.1, 11.0], [20.2, 11.0], [20.3, 11.0], [20.4, 11.0], [20.5, 11.0], [20.6, 11.0], [20.7, 11.0], [20.8, 11.0], [20.9, 11.0], [21.0, 11.0], [21.1, 11.0], [21.2, 11.0], [21.3, 11.0], [21.4, 11.0], [21.5, 11.0], [21.6, 11.0], [21.7, 11.0], [21.8, 11.0], [21.9, 11.0], [22.0, 11.0], [22.1, 11.0], [22.2, 11.0], [22.3, 11.0], [22.4, 11.0], [22.5, 11.0], [22.6, 11.0], [22.7, 11.0], [22.8, 11.0], [22.9, 11.0], [23.0, 11.0], [23.1, 11.0], [23.2, 11.0], [23.3, 11.0], [23.4, 11.0], [23.5, 11.0], [23.6, 11.0], [23.7, 11.0], [23.8, 11.0], [23.9, 11.0], [24.0, 11.0], [24.1, 11.0], [24.2, 11.0], [24.3, 11.0], [24.4, 11.0], [24.5, 11.0], [24.6, 12.0], [24.7, 12.0], [24.8, 12.0], [24.9, 12.0], [25.0, 12.0], [25.1, 12.0], [25.2, 12.0], [25.3, 12.0], [25.4, 12.0], [25.5, 12.0], [25.6, 12.0], [25.7, 12.0], [25.8, 12.0], [25.9, 12.0], [26.0, 12.0], [26.1, 12.0], [26.2, 12.0], [26.3, 12.0], [26.4, 12.0], [26.5, 12.0], [26.6, 12.0], [26.7, 12.0], [26.8, 12.0], [26.9, 12.0], [27.0, 12.0], [27.1, 12.0], [27.2, 12.0], [27.3, 12.0], [27.4, 12.0], [27.5, 12.0], [27.6, 12.0], [27.7, 12.0], [27.8, 12.0], [27.9, 12.0], [28.0, 12.0], [28.1, 12.0], [28.2, 12.0], [28.3, 12.0], [28.4, 12.0], [28.5, 12.0], [28.6, 12.0], [28.7, 12.0], [28.8, 12.0], [28.9, 12.0], [29.0, 12.0], [29.1, 12.0], [29.2, 12.0], [29.3, 12.0], [29.4, 12.0], [29.5, 12.0], [29.6, 12.0], [29.7, 12.0], [29.8, 12.0], [29.9, 12.0], [30.0, 12.0], [30.1, 12.0], [30.2, 12.0], [30.3, 12.0], [30.4, 12.0], [30.5, 12.0], [30.6, 12.0], [30.7, 12.0], [30.8, 12.0], [30.9, 12.0], [31.0, 12.0], [31.1, 12.0], [31.2, 12.0], [31.3, 13.0], [31.4, 13.0], [31.5, 13.0], [31.6, 13.0], [31.7, 13.0], [31.8, 13.0], [31.9, 13.0], [32.0, 13.0], [32.1, 13.0], [32.2, 13.0], [32.3, 13.0], [32.4, 13.0], [32.5, 13.0], [32.6, 13.0], [32.7, 13.0], [32.8, 13.0], [32.9, 13.0], [33.0, 13.0], [33.1, 13.0], [33.2, 13.0], [33.3, 13.0], [33.4, 13.0], [33.5, 13.0], [33.6, 13.0], [33.7, 13.0], [33.8, 13.0], [33.9, 13.0], [34.0, 13.0], [34.1, 13.0], [34.2, 13.0], [34.3, 13.0], [34.4, 13.0], [34.5, 13.0], [34.6, 13.0], [34.7, 13.0], [34.8, 13.0], [34.9, 13.0], [35.0, 13.0], [35.1, 13.0], [35.2, 13.0], [35.3, 13.0], [35.4, 13.0], [35.5, 13.0], [35.6, 13.0], [35.7, 13.0], [35.8, 13.0], [35.9, 13.0], [36.0, 13.0], [36.1, 13.0], [36.2, 13.0], [36.3, 13.0], [36.4, 13.0], [36.5, 13.0], [36.6, 13.0], [36.7, 13.0], [36.8, 13.0], [36.9, 13.0], [37.0, 13.0], [37.1, 14.0], [37.2, 14.0], [37.3, 14.0], [37.4, 14.0], [37.5, 14.0], [37.6, 14.0], [37.7, 14.0], [37.8, 14.0], [37.9, 14.0], [38.0, 14.0], [38.1, 14.0], [38.2, 14.0], [38.3, 14.0], [38.4, 14.0], [38.5, 14.0], [38.6, 14.0], [38.7, 14.0], [38.8, 14.0], [38.9, 14.0], [39.0, 14.0], [39.1, 14.0], [39.2, 14.0], [39.3, 14.0], [39.4, 14.0], [39.5, 14.0], [39.6, 14.0], [39.7, 14.0], [39.8, 14.0], [39.9, 14.0], [40.0, 14.0], [40.1, 14.0], [40.2, 14.0], [40.3, 14.0], [40.4, 14.0], [40.5, 14.0], [40.6, 14.0], [40.7, 14.0], [40.8, 14.0], [40.9, 14.0], [41.0, 14.0], [41.1, 14.0], [41.2, 14.0], [41.3, 14.0], [41.4, 14.0], [41.5, 15.0], [41.6, 15.0], [41.7, 15.0], [41.8, 15.0], [41.9, 15.0], [42.0, 15.0], [42.1, 15.0], [42.2, 15.0], [42.3, 15.0], [42.4, 15.0], [42.5, 15.0], [42.6, 15.0], [42.7, 15.0], [42.8, 15.0], [42.9, 15.0], [43.0, 15.0], [43.1, 15.0], [43.2, 15.0], [43.3, 15.0], [43.4, 15.0], [43.5, 15.0], [43.6, 15.0], [43.7, 15.0], [43.8, 15.0], [43.9, 15.0], [44.0, 15.0], [44.1, 15.0], [44.2, 15.0], [44.3, 15.0], [44.4, 15.0], [44.5, 15.0], [44.6, 15.0], [44.7, 15.0], [44.8, 16.0], [44.9, 16.0], [45.0, 16.0], [45.1, 16.0], [45.2, 16.0], [45.3, 16.0], [45.4, 16.0], [45.5, 16.0], [45.6, 16.0], [45.7, 16.0], [45.8, 16.0], [45.9, 16.0], [46.0, 16.0], [46.1, 16.0], [46.2, 16.0], [46.3, 16.0], [46.4, 16.0], [46.5, 16.0], [46.6, 16.0], [46.7, 16.0], [46.8, 16.0], [46.9, 16.0], [47.0, 16.0], [47.1, 16.0], [47.2, 16.0], [47.3, 17.0], [47.4, 17.0], [47.5, 17.0], [47.6, 17.0], [47.7, 17.0], [47.8, 17.0], [47.9, 17.0], [48.0, 17.0], [48.1, 17.0], [48.2, 17.0], [48.3, 17.0], [48.4, 17.0], [48.5, 17.0], [48.6, 17.0], [48.7, 17.0], [48.8, 17.0], [48.9, 17.0], [49.0, 17.0], [49.1, 17.0], [49.2, 18.0], [49.3, 18.0], [49.4, 18.0], [49.5, 18.0], [49.6, 18.0], [49.7, 18.0], [49.8, 18.0], [49.9, 18.0], [50.0, 18.0], [50.1, 18.0], [50.2, 18.0], [50.3, 18.0], [50.4, 18.0], [50.5, 18.0], [50.6, 18.0], [50.7, 19.0], [50.8, 19.0], [50.9, 19.0], [51.0, 19.0], [51.1, 19.0], [51.2, 19.0], [51.3, 19.0], [51.4, 19.0], [51.5, 19.0], [51.6, 19.0], [51.7, 19.0], [51.8, 19.0], [51.9, 19.0], [52.0, 19.0], [52.1, 19.0], [52.2, 19.0], [52.3, 19.0], [52.4, 19.0], [52.5, 20.0], [52.6, 20.0], [52.7, 20.0], [52.8, 20.0], [52.9, 20.0], [53.0, 20.0], [53.1, 20.0], [53.2, 20.0], [53.3, 20.0], [53.4, 20.0], [53.5, 20.0], [53.6, 20.0], [53.7, 20.0], [53.8, 20.0], [53.9, 20.0], [54.0, 20.0], [54.1, 21.0], [54.2, 21.0], [54.3, 21.0], [54.4, 21.0], [54.5, 21.0], [54.6, 21.0], [54.7, 21.0], [54.8, 21.0], [54.9, 21.0], [55.0, 21.0], [55.1, 21.0], [55.2, 21.0], [55.3, 21.0], [55.4, 21.0], [55.5, 21.0], [55.6, 21.0], [55.7, 22.0], [55.8, 22.0], [55.9, 22.0], [56.0, 22.0], [56.1, 22.0], [56.2, 22.0], [56.3, 22.0], [56.4, 22.0], [56.5, 22.0], [56.6, 22.0], [56.7, 22.0], [56.8, 22.0], [56.9, 22.0], [57.0, 22.0], [57.1, 22.0], [57.2, 22.0], [57.3, 22.0], [57.4, 22.0], [57.5, 23.0], [57.6, 23.0], [57.7, 23.0], [57.8, 23.0], [57.9, 23.0], [58.0, 23.0], [58.1, 23.0], [58.2, 23.0], [58.3, 23.0], [58.4, 23.0], [58.5, 23.0], [58.6, 23.0], [58.7, 23.0], [58.8, 23.0], [58.9, 23.0], [59.0, 23.0], [59.1, 23.0], [59.2, 23.0], [59.3, 23.0], [59.4, 24.0], [59.5, 24.0], [59.6, 24.0], [59.7, 24.0], [59.8, 24.0], [59.9, 24.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 24.0], [60.4, 24.0], [60.5, 24.0], [60.6, 24.0], [60.7, 24.0], [60.8, 24.0], [60.9, 24.0], [61.0, 24.0], [61.1, 24.0], [61.2, 24.0], [61.3, 24.0], [61.4, 24.0], [61.5, 24.0], [61.6, 25.0], [61.7, 25.0], [61.8, 25.0], [61.9, 25.0], [62.0, 25.0], [62.1, 25.0], [62.2, 25.0], [62.3, 25.0], [62.4, 25.0], [62.5, 25.0], [62.6, 25.0], [62.7, 25.0], [62.8, 25.0], [62.9, 25.0], [63.0, 25.0], [63.1, 25.0], [63.2, 25.0], [63.3, 25.0], [63.4, 25.0], [63.5, 25.0], [63.6, 25.0], [63.7, 25.0], [63.8, 26.0], [63.9, 26.0], [64.0, 26.0], [64.1, 26.0], [64.2, 26.0], [64.3, 26.0], [64.4, 26.0], [64.5, 26.0], [64.6, 26.0], [64.7, 26.0], [64.8, 26.0], [64.9, 26.0], [65.0, 26.0], [65.1, 26.0], [65.2, 26.0], [65.3, 26.0], [65.4, 26.0], [65.5, 26.0], [65.6, 26.0], [65.7, 26.0], [65.8, 26.0], [65.9, 26.0], [66.0, 27.0], [66.1, 27.0], [66.2, 27.0], [66.3, 27.0], [66.4, 27.0], [66.5, 27.0], [66.6, 27.0], [66.7, 27.0], [66.8, 27.0], [66.9, 27.0], [67.0, 27.0], [67.1, 27.0], [67.2, 27.0], [67.3, 27.0], [67.4, 27.0], [67.5, 27.0], [67.6, 27.0], [67.7, 27.0], [67.8, 27.0], [67.9, 27.0], [68.0, 27.0], [68.1, 27.0], [68.2, 27.0], [68.3, 27.0], [68.4, 28.0], [68.5, 28.0], [68.6, 28.0], [68.7, 28.0], [68.8, 28.0], [68.9, 28.0], [69.0, 28.0], [69.1, 28.0], [69.2, 28.0], [69.3, 28.0], [69.4, 28.0], [69.5, 28.0], [69.6, 28.0], [69.7, 28.0], [69.8, 28.0], [69.9, 28.0], [70.0, 28.0], [70.1, 28.0], [70.2, 28.0], [70.3, 28.0], [70.4, 28.0], [70.5, 28.0], [70.6, 28.0], [70.7, 28.0], [70.8, 28.0], [70.9, 28.0], [71.0, 28.0], [71.1, 28.0], [71.2, 28.0], [71.3, 29.0], [71.4, 29.0], [71.5, 29.0], [71.6, 29.0], [71.7, 29.0], [71.8, 29.0], [71.9, 29.0], [72.0, 29.0], [72.1, 29.0], [72.2, 29.0], [72.3, 29.0], [72.4, 29.0], [72.5, 29.0], [72.6, 29.0], [72.7, 29.0], [72.8, 29.0], [72.9, 29.0], [73.0, 29.0], [73.1, 29.0], [73.2, 29.0], [73.3, 29.0], [73.4, 29.0], [73.5, 29.0], [73.6, 29.0], [73.7, 29.0], [73.8, 29.0], [73.9, 29.0], [74.0, 29.0], [74.1, 29.0], [74.2, 29.0], [74.3, 29.0], [74.4, 29.0], [74.5, 30.0], [74.6, 30.0], [74.7, 30.0], [74.8, 30.0], [74.9, 30.0], [75.0, 30.0], [75.1, 30.0], [75.2, 30.0], [75.3, 30.0], [75.4, 30.0], [75.5, 30.0], [75.6, 30.0], [75.7, 30.0], [75.8, 30.0], [75.9, 30.0], [76.0, 30.0], [76.1, 30.0], [76.2, 30.0], [76.3, 30.0], [76.4, 30.0], [76.5, 30.0], [76.6, 30.0], [76.7, 30.0], [76.8, 30.0], [76.9, 30.0], [77.0, 30.0], [77.1, 30.0], [77.2, 30.0], [77.3, 30.0], [77.4, 30.0], [77.5, 31.0], [77.6, 31.0], [77.7, 31.0], [77.8, 31.0], [77.9, 31.0], [78.0, 31.0], [78.1, 31.0], [78.2, 31.0], [78.3, 31.0], [78.4, 31.0], [78.5, 31.0], [78.6, 31.0], [78.7, 31.0], [78.8, 31.0], [78.9, 31.0], [79.0, 31.0], [79.1, 31.0], [79.2, 31.0], [79.3, 31.0], [79.4, 31.0], [79.5, 31.0], [79.6, 31.0], [79.7, 31.0], [79.8, 31.0], [79.9, 32.0], [80.0, 32.0], [80.1, 32.0], [80.2, 32.0], [80.3, 32.0], [80.4, 32.0], [80.5, 32.0], [80.6, 32.0], [80.7, 32.0], [80.8, 32.0], [80.9, 32.0], [81.0, 32.0], [81.1, 32.0], [81.2, 32.0], [81.3, 32.0], [81.4, 32.0], [81.5, 32.0], [81.6, 32.0], [81.7, 32.0], [81.8, 32.0], [81.9, 32.0], [82.0, 32.0], [82.1, 33.0], [82.2, 33.0], [82.3, 33.0], [82.4, 33.0], [82.5, 33.0], [82.6, 33.0], [82.7, 33.0], [82.8, 33.0], [82.9, 33.0], [83.0, 33.0], [83.1, 33.0], [83.2, 33.0], [83.3, 33.0], [83.4, 33.0], [83.5, 33.0], [83.6, 33.0], [83.7, 33.0], [83.8, 33.0], [83.9, 33.0], [84.0, 33.0], [84.1, 33.0], [84.2, 34.0], [84.3, 34.0], [84.4, 34.0], [84.5, 34.0], [84.6, 34.0], [84.7, 34.0], [84.8, 34.0], [84.9, 34.0], [85.0, 34.0], [85.1, 34.0], [85.2, 34.0], [85.3, 34.0], [85.4, 34.0], [85.5, 34.0], [85.6, 34.0], [85.7, 34.0], [85.8, 34.0], [85.9, 34.0], [86.0, 34.0], [86.1, 34.0], [86.2, 35.0], [86.3, 35.0], [86.4, 35.0], [86.5, 35.0], [86.6, 35.0], [86.7, 35.0], [86.8, 35.0], [86.9, 35.0], [87.0, 35.0], [87.1, 35.0], [87.2, 35.0], [87.3, 35.0], [87.4, 35.0], [87.5, 35.0], [87.6, 35.0], [87.7, 35.0], [87.8, 35.0], [87.9, 35.0], [88.0, 36.0], [88.1, 36.0], [88.2, 36.0], [88.3, 36.0], [88.4, 36.0], [88.5, 36.0], [88.6, 36.0], [88.7, 36.0], [88.8, 36.0], [88.9, 36.0], [89.0, 36.0], [89.1, 36.0], [89.2, 36.0], [89.3, 36.0], [89.4, 36.0], [89.5, 36.0], [89.6, 37.0], [89.7, 37.0], [89.8, 37.0], [89.9, 37.0], [90.0, 37.0], [90.1, 37.0], [90.2, 37.0], [90.3, 37.0], [90.4, 37.0], [90.5, 37.0], [90.6, 37.0], [90.7, 37.0], [90.8, 37.0], [90.9, 38.0], [91.0, 38.0], [91.1, 38.0], [91.2, 38.0], [91.3, 38.0], [91.4, 38.0], [91.5, 38.0], [91.6, 38.0], [91.7, 38.0], [91.8, 38.0], [91.9, 38.0], [92.0, 39.0], [92.1, 39.0], [92.2, 39.0], [92.3, 39.0], [92.4, 39.0], [92.5, 39.0], [92.6, 39.0], [92.7, 39.0], [92.8, 39.0], [92.9, 40.0], [93.0, 40.0], [93.1, 40.0], [93.2, 40.0], [93.3, 40.0], [93.4, 40.0], [93.5, 40.0], [93.6, 40.0], [93.7, 41.0], [93.8, 41.0], [93.9, 41.0], [94.0, 41.0], [94.1, 41.0], [94.2, 41.0], [94.3, 42.0], [94.4, 42.0], [94.5, 42.0], [94.6, 42.0], [94.7, 42.0], [94.8, 42.0], [94.9, 43.0], [95.0, 43.0], [95.1, 43.0], [95.2, 43.0], [95.3, 43.0], [95.4, 44.0], [95.5, 44.0], [95.6, 44.0], [95.7, 45.0], [95.8, 45.0], [95.9, 45.0], [96.0, 46.0], [96.1, 46.0], [96.2, 46.0], [96.3, 47.0], [96.4, 47.0], [96.5, 47.0], [96.6, 48.0], [96.7, 48.0], [96.8, 48.0], [96.9, 49.0], [97.0, 49.0], [97.1, 50.0], [97.2, 51.0], [97.3, 51.0], [97.4, 52.0], [97.5, 52.0], [97.6, 52.0], [97.7, 53.0], [97.8, 53.0], [97.9, 54.0], [98.0, 55.0], [98.1, 55.0], [98.2, 56.0], [98.3, 57.0], [98.4, 57.0], [98.5, 58.0], [98.6, 59.0], [98.7, 60.0], [98.8, 61.0], [98.9, 62.0], [99.0, 64.0], [99.1, 66.0], [99.2, 69.0], [99.3, 73.0], [99.4, 76.0], [99.5, 82.0], [99.6, 92.0], [99.7, 106.0], [99.8, 129.0], [99.9, 193.0], [100.0, 822.0]], "isOverall": false, "label": "insercao-volume", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 99651.0, "series": [{"data": [[0.0, 99651.0], [600.0, 1.0], [300.0, 6.0], [700.0, 19.0], [200.0, 62.0], [400.0, 1.0], [100.0, 259.0], [800.0, 1.0]], "isOverall": false, "label": "insercao-volume", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 99979.0, "series": [{"data": [[0.0, 99979.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 21.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 18.025899946041722, "minX": 1.79496576E12, "maxY": 20.0, "series": [{"data": [[1.79496588E12, 18.025899946041722], [1.79496582E12, 20.0], [1.79496576E12, 19.500130467072236]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79496588E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7.2631578947368425, "minX": 1.0, "maxY": 41.333333333333314, "series": [{"data": [[8.0, 9.2565130260521], [2.0, 8.465116279069768], [9.0, 10.29411764705882], [10.0, 15.195530726256981], [11.0, 10.06312292358803], [3.0, 41.333333333333314], [12.0, 10.254980079681276], [13.0, 12.85920577617328], [14.0, 10.526071842410202], [15.0, 12.089635854341726], [4.0, 23.186440677966093], [16.0, 11.356228172293374], [1.0, 7.2631578947368425], [17.0, 13.49095022624434], [18.0, 12.556768558951969], [19.0, 13.922437673130196], [5.0, 18.748251748251743], [20.0, 22.78300308800843], [6.0, 23.114754098360653], [7.0, 12.744680851063826]], "isOverall": false, "label": "insercao-volume", "isController": false}, {"data": [[19.494860000000145, 22.10273999999998]], "isOverall": false, "label": "insercao-volume-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.79496576E12, "maxY": 7473.15, "series": [{"data": [[1.79496588E12, 1945.95], [1.79496582E12, 5580.9], [1.79496576E12, 7473.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79496588E12, 0.0], [1.79496582E12, 0.0], [1.79496576E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79496588E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 14.822323286826542, "minX": 1.79496576E12, "maxY": 32.186502177067894, "series": [{"data": [[1.79496588E12, 14.822323286826542], [1.79496582E12, 32.186502177067894], [1.79496576E12, 16.468015495473818]], "isOverall": false, "label": "insercao-volume", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79496588E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 14.808062899868931, "minX": 1.79496576E12, "maxY": 32.169461914744886, "series": [{"data": [[1.79496588E12, 14.808062899868931], [1.79496582E12, 32.169461914744886], [1.79496576E12, 16.446659039360867]], "isOverall": false, "label": "insercao-volume", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79496588E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0032374932552223863, "minX": 1.79496576E12, "maxY": 0.031833965596837065, "series": [{"data": [[1.79496588E12, 0.0032374932552223863], [1.79496582E12, 0.0035746922539375233], [1.79496576E12, 0.031833965596837065]], "isOverall": false, "label": "insercao-volume", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79496588E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.79496576E12, "maxY": 822.0, "series": [{"data": [[1.79496588E12, 122.0], [1.79496582E12, 822.0], [1.79496576E12, 658.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79496588E12, 4.0], [1.79496582E12, 8.0], [1.79496576E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79496588E12, 22.0], [1.79496582E12, 41.0], [1.79496576E12, 40.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79496588E12, 43.26000000000022], [1.79496582E12, 64.0], [1.79496576E12, 103.9900000000016]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79496588E12, 14.0], [1.79496582E12, 30.0], [1.79496576E12, 18.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79496588E12, 26.0], [1.79496582E12, 49.0], [1.79496576E12, 49.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79496588E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 8.0, "minX": 70.0, "maxY": 137.5, "series": [{"data": [[70.0, 60.0], [87.0, 62.0], [134.0, 137.5], [171.0, 9.0], [228.0, 33.0], [293.0, 38.0], [382.0, 43.0], [370.0, 31.0], [445.0, 10.0], [446.0, 41.0], [444.0, 44.5], [495.0, 33.0], [498.0, 40.0], [511.0, 34.0], [536.0, 34.0], [542.0, 33.0], [531.0, 34.0], [573.0, 33.0], [571.0, 34.0], [567.0, 33.0], [570.0, 34.0], [552.0, 33.0], [574.0, 33.0], [607.0, 30.0], [591.0, 32.0], [592.0, 32.0], [597.0, 31.0], [587.0, 33.0], [593.0, 32.0], [590.0, 31.0], [595.0, 30.0], [596.0, 32.0], [627.0, 31.0], [635.0, 30.0], [629.0, 32.0], [630.0, 31.0], [609.0, 30.0], [631.0, 30.0], [608.0, 31.0], [626.0, 31.0], [628.0, 32.0], [653.0, 28.0], [666.0, 29.0], [670.0, 21.0], [648.0, 30.0], [649.0, 29.0], [651.0, 29.0], [650.0, 30.0], [667.0, 29.0], [668.0, 29.0], [654.0, 29.0], [703.0, 27.0], [694.0, 28.0], [672.0, 27.0], [700.0, 29.0], [687.0, 28.0], [731.0, 27.0], [704.0, 26.0], [707.0, 28.0], [740.0, 27.0], [772.0, 23.0], [787.0, 25.0], [815.0, 22.0], [816.0, 25.0], [852.0, 21.0], [833.0, 23.0], [895.0, 21.0], [922.0, 20.0], [924.0, 8.0], [1051.0, 11.0], [1117.0, 17.0], [1247.0, 13.0], [1267.0, 13.0], [1241.0, 13.0], [1257.0, 13.0], [1260.0, 14.0], [1400.0, 14.0], [1406.0, 14.0], [1426.0, 13.0], [1412.0, 14.0], [1467.0, 13.0], [1420.0, 14.0], [1423.0, 9.0], [1531.0, 12.0], [1579.0, 13.0], [1550.0, 11.0], [1609.0, 12.0], [1661.0, 11.0], [1696.0, 11.0], [1698.0, 11.0], [1666.0, 12.0], [1717.0, 11.0], [1672.0, 12.0], [1686.0, 11.0], [1783.0, 11.0], [1771.0, 11.0], [1799.0, 11.0], [1834.0, 10.0], [1905.0, 10.0], [1958.0, 10.0], [2016.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2016.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 8.0, "minX": 70.0, "maxY": 137.5, "series": [{"data": [[70.0, 60.0], [87.0, 62.0], [134.0, 137.5], [171.0, 9.0], [228.0, 33.0], [293.0, 38.0], [382.0, 43.0], [370.0, 31.0], [445.0, 10.0], [446.0, 41.0], [444.0, 44.5], [495.0, 33.0], [498.0, 40.0], [511.0, 34.0], [536.0, 34.0], [542.0, 33.0], [531.0, 34.0], [573.0, 33.0], [571.0, 34.0], [567.0, 33.0], [570.0, 34.0], [552.0, 33.0], [574.0, 33.0], [607.0, 30.0], [591.0, 32.0], [592.0, 32.0], [597.0, 31.0], [587.0, 33.0], [593.0, 32.0], [590.0, 31.0], [595.0, 30.0], [596.0, 32.0], [627.0, 31.0], [635.0, 30.0], [629.0, 32.0], [630.0, 31.0], [609.0, 30.0], [631.0, 30.0], [608.0, 31.0], [626.0, 31.0], [628.0, 32.0], [653.0, 28.0], [666.0, 29.0], [670.0, 21.0], [648.0, 30.0], [649.0, 29.0], [651.0, 29.0], [650.0, 30.0], [667.0, 29.0], [668.0, 29.0], [654.0, 29.0], [703.0, 27.0], [694.0, 28.0], [672.0, 27.0], [700.0, 29.0], [687.0, 28.0], [731.0, 27.0], [704.0, 26.0], [707.0, 28.0], [740.0, 27.0], [772.0, 22.5], [787.0, 25.0], [815.0, 22.0], [816.0, 25.0], [852.0, 21.0], [833.0, 23.0], [895.0, 21.0], [922.0, 20.0], [924.0, 8.0], [1051.0, 11.0], [1117.0, 17.0], [1247.0, 13.0], [1267.0, 13.0], [1241.0, 13.0], [1257.0, 13.0], [1260.0, 14.0], [1400.0, 14.0], [1406.0, 14.0], [1426.0, 13.0], [1412.0, 14.0], [1467.0, 13.0], [1420.0, 14.0], [1423.0, 9.0], [1531.0, 12.0], [1579.0, 13.0], [1550.0, 11.0], [1609.0, 12.0], [1661.0, 11.0], [1696.0, 11.0], [1698.0, 11.0], [1666.0, 12.0], [1717.0, 11.0], [1672.0, 12.0], [1686.0, 11.0], [1783.0, 11.0], [1771.0, 11.0], [1799.0, 11.0], [1834.0, 10.0], [1905.0, 10.0], [1958.0, 10.0], [2016.0, 10.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2016.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 215.88333333333333, "minX": 1.79496576E12, "maxY": 830.6833333333333, "series": [{"data": [[1.79496588E12, 215.88333333333333], [1.79496582E12, 620.1], [1.79496576E12, 830.6833333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79496588E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 216.21666666666667, "minX": 1.79496576E12, "maxY": 830.35, "series": [{"data": [[1.79496588E12, 216.21666666666667], [1.79496582E12, 620.1], [1.79496576E12, 830.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79496588E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 216.21666666666667, "minX": 1.79496576E12, "maxY": 830.35, "series": [{"data": [[1.79496588E12, 216.21666666666667], [1.79496582E12, 620.1], [1.79496576E12, 830.35]], "isOverall": false, "label": "insercao-volume-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79496588E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 216.21666666666667, "minX": 1.79496576E12, "maxY": 830.35, "series": [{"data": [[1.79496588E12, 216.21666666666667], [1.79496582E12, 620.1], [1.79496576E12, 830.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79496588E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

