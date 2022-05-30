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
        data: {"result": {"minY": 4042.0, "minX": 0.0, "maxY": 12988.0, "series": [{"data": [[0.0, 4042.0], [0.1, 4042.0], [0.2, 4042.0], [0.3, 4042.0], [0.4, 4042.0], [0.5, 4042.0], [0.6, 4042.0], [0.7, 4042.0], [0.8, 4042.0], [0.9, 4042.0], [1.0, 4042.0], [1.1, 4042.0], [1.2, 4042.0], [1.3, 4042.0], [1.4, 4042.0], [1.5, 4042.0], [1.6, 4042.0], [1.7, 4431.0], [1.8, 4431.0], [1.9, 4431.0], [2.0, 4431.0], [2.1, 4431.0], [2.2, 4431.0], [2.3, 4431.0], [2.4, 4431.0], [2.5, 4431.0], [2.6, 4431.0], [2.7, 4431.0], [2.8, 4431.0], [2.9, 4431.0], [3.0, 4431.0], [3.1, 4431.0], [3.2, 4431.0], [3.3, 4514.0], [3.4, 4514.0], [3.5, 4514.0], [3.6, 4514.0], [3.7, 4514.0], [3.8, 4514.0], [3.9, 4514.0], [4.0, 4514.0], [4.1, 4514.0], [4.2, 4514.0], [4.3, 4514.0], [4.4, 4514.0], [4.5, 4514.0], [4.6, 4514.0], [4.7, 4514.0], [4.8, 4514.0], [4.9, 4514.0], [5.0, 4577.0], [5.1, 4577.0], [5.2, 4577.0], [5.3, 4577.0], [5.4, 4577.0], [5.5, 4577.0], [5.6, 4577.0], [5.7, 4577.0], [5.8, 4577.0], [5.9, 4577.0], [6.0, 4577.0], [6.1, 4577.0], [6.2, 4577.0], [6.3, 4577.0], [6.4, 4577.0], [6.5, 4577.0], [6.6, 4718.0], [6.7, 4718.0], [6.8, 4718.0], [6.9, 4718.0], [7.0, 4718.0], [7.1, 4718.0], [7.2, 4718.0], [7.3, 4718.0], [7.4, 4718.0], [7.5, 4718.0], [7.6, 4718.0], [7.7, 4718.0], [7.8, 4718.0], [7.9, 4718.0], [8.0, 4718.0], [8.1, 4718.0], [8.2, 4722.0], [8.3, 4722.0], [8.4, 4722.0], [8.5, 4722.0], [8.6, 4722.0], [8.7, 4722.0], [8.8, 4722.0], [8.9, 4722.0], [9.0, 4722.0], [9.1, 4722.0], [9.2, 4722.0], [9.3, 4722.0], [9.4, 4722.0], [9.5, 4722.0], [9.6, 4722.0], [9.7, 4722.0], [9.8, 4722.0], [9.9, 4845.0], [10.0, 4845.0], [10.1, 4845.0], [10.2, 4845.0], [10.3, 4845.0], [10.4, 4845.0], [10.5, 4845.0], [10.6, 4845.0], [10.7, 4845.0], [10.8, 4845.0], [10.9, 4845.0], [11.0, 4845.0], [11.1, 4845.0], [11.2, 4845.0], [11.3, 4845.0], [11.4, 4845.0], [11.5, 4896.0], [11.6, 4896.0], [11.7, 4896.0], [11.8, 4896.0], [11.9, 4896.0], [12.0, 4896.0], [12.1, 4896.0], [12.2, 4896.0], [12.3, 4896.0], [12.4, 4896.0], [12.5, 4896.0], [12.6, 4896.0], [12.7, 4896.0], [12.8, 4896.0], [12.9, 4896.0], [13.0, 4896.0], [13.1, 4896.0], [13.2, 4950.0], [13.3, 4950.0], [13.4, 4950.0], [13.5, 4950.0], [13.6, 4950.0], [13.7, 4950.0], [13.8, 4950.0], [13.9, 4950.0], [14.0, 4950.0], [14.1, 4950.0], [14.2, 4950.0], [14.3, 4950.0], [14.4, 4950.0], [14.5, 4950.0], [14.6, 4950.0], [14.7, 4950.0], [14.8, 4968.0], [14.9, 4968.0], [15.0, 4968.0], [15.1, 4968.0], [15.2, 4968.0], [15.3, 4968.0], [15.4, 4968.0], [15.5, 4968.0], [15.6, 4968.0], [15.7, 4968.0], [15.8, 4968.0], [15.9, 4968.0], [16.0, 4968.0], [16.1, 4968.0], [16.2, 4968.0], [16.3, 4968.0], [16.4, 5180.0], [16.5, 5180.0], [16.6, 5180.0], [16.7, 5180.0], [16.8, 5180.0], [16.9, 5180.0], [17.0, 5180.0], [17.1, 5180.0], [17.2, 5180.0], [17.3, 5180.0], [17.4, 5180.0], [17.5, 5180.0], [17.6, 5180.0], [17.7, 5180.0], [17.8, 5180.0], [17.9, 5180.0], [18.0, 5180.0], [18.1, 5322.0], [18.2, 5322.0], [18.3, 5322.0], [18.4, 5322.0], [18.5, 5322.0], [18.6, 5322.0], [18.7, 5322.0], [18.8, 5322.0], [18.9, 5322.0], [19.0, 5322.0], [19.1, 5322.0], [19.2, 5322.0], [19.3, 5322.0], [19.4, 5322.0], [19.5, 5322.0], [19.6, 5322.0], [19.7, 5720.0], [19.8, 5720.0], [19.9, 5720.0], [20.0, 5720.0], [20.1, 5720.0], [20.2, 5720.0], [20.3, 5720.0], [20.4, 5720.0], [20.5, 5720.0], [20.6, 5720.0], [20.7, 5720.0], [20.8, 5720.0], [20.9, 5720.0], [21.0, 5720.0], [21.1, 5720.0], [21.2, 5720.0], [21.3, 5720.0], [21.4, 6363.0], [21.5, 6363.0], [21.6, 6363.0], [21.7, 6363.0], [21.8, 6363.0], [21.9, 6363.0], [22.0, 6363.0], [22.1, 6363.0], [22.2, 6363.0], [22.3, 6363.0], [22.4, 6363.0], [22.5, 6363.0], [22.6, 6363.0], [22.7, 6363.0], [22.8, 6363.0], [22.9, 6363.0], [23.0, 6399.0], [23.1, 6399.0], [23.2, 6399.0], [23.3, 6399.0], [23.4, 6399.0], [23.5, 6399.0], [23.6, 6399.0], [23.7, 6399.0], [23.8, 6399.0], [23.9, 6399.0], [24.0, 6399.0], [24.1, 6399.0], [24.2, 6399.0], [24.3, 6399.0], [24.4, 6399.0], [24.5, 6399.0], [24.6, 6408.0], [24.7, 6408.0], [24.8, 6408.0], [24.9, 6408.0], [25.0, 6408.0], [25.1, 6408.0], [25.2, 6408.0], [25.3, 6408.0], [25.4, 6408.0], [25.5, 6408.0], [25.6, 6408.0], [25.7, 6408.0], [25.8, 6408.0], [25.9, 6408.0], [26.0, 6408.0], [26.1, 6408.0], [26.2, 6408.0], [26.3, 6409.0], [26.4, 6409.0], [26.5, 6409.0], [26.6, 6409.0], [26.7, 6409.0], [26.8, 6409.0], [26.9, 6409.0], [27.0, 6409.0], [27.1, 6409.0], [27.2, 6409.0], [27.3, 6409.0], [27.4, 6409.0], [27.5, 6409.0], [27.6, 6409.0], [27.7, 6409.0], [27.8, 6409.0], [27.9, 6433.0], [28.0, 6433.0], [28.1, 6433.0], [28.2, 6433.0], [28.3, 6433.0], [28.4, 6433.0], [28.5, 6433.0], [28.6, 6433.0], [28.7, 6433.0], [28.8, 6433.0], [28.9, 6433.0], [29.0, 6433.0], [29.1, 6433.0], [29.2, 6433.0], [29.3, 6433.0], [29.4, 6433.0], [29.5, 6433.0], [29.6, 6598.0], [29.7, 6598.0], [29.8, 6598.0], [29.9, 6598.0], [30.0, 6598.0], [30.1, 6598.0], [30.2, 6598.0], [30.3, 6598.0], [30.4, 6598.0], [30.5, 6598.0], [30.6, 6598.0], [30.7, 6598.0], [30.8, 6598.0], [30.9, 6598.0], [31.0, 6598.0], [31.1, 6598.0], [31.2, 6883.0], [31.3, 6883.0], [31.4, 6883.0], [31.5, 6883.0], [31.6, 6883.0], [31.7, 6883.0], [31.8, 6883.0], [31.9, 6883.0], [32.0, 6883.0], [32.1, 6883.0], [32.2, 6883.0], [32.3, 6883.0], [32.4, 6883.0], [32.5, 6883.0], [32.6, 6883.0], [32.7, 6883.0], [32.8, 7124.0], [32.9, 7124.0], [33.0, 7124.0], [33.1, 7124.0], [33.2, 7124.0], [33.3, 7124.0], [33.4, 7124.0], [33.5, 7124.0], [33.6, 7124.0], [33.7, 7124.0], [33.8, 7124.0], [33.9, 7124.0], [34.0, 7124.0], [34.1, 7124.0], [34.2, 7124.0], [34.3, 7124.0], [34.4, 7124.0], [34.5, 7291.0], [34.6, 7291.0], [34.7, 7291.0], [34.8, 7291.0], [34.9, 7291.0], [35.0, 7291.0], [35.1, 7291.0], [35.2, 7291.0], [35.3, 7291.0], [35.4, 7291.0], [35.5, 7291.0], [35.6, 7291.0], [35.7, 7291.0], [35.8, 7291.0], [35.9, 7291.0], [36.0, 7291.0], [36.1, 7577.0], [36.2, 7577.0], [36.3, 7577.0], [36.4, 7577.0], [36.5, 7577.0], [36.6, 7577.0], [36.7, 7577.0], [36.8, 7577.0], [36.9, 7577.0], [37.0, 7577.0], [37.1, 7577.0], [37.2, 7577.0], [37.3, 7577.0], [37.4, 7577.0], [37.5, 7577.0], [37.6, 7577.0], [37.7, 7577.0], [37.8, 7680.0], [37.9, 7680.0], [38.0, 7680.0], [38.1, 7680.0], [38.2, 7680.0], [38.3, 7680.0], [38.4, 7680.0], [38.5, 7680.0], [38.6, 7680.0], [38.7, 7680.0], [38.8, 7680.0], [38.9, 7680.0], [39.0, 7680.0], [39.1, 7680.0], [39.2, 7680.0], [39.3, 7680.0], [39.4, 7710.0], [39.5, 7710.0], [39.6, 7710.0], [39.7, 7710.0], [39.8, 7710.0], [39.9, 7710.0], [40.0, 7710.0], [40.1, 7710.0], [40.2, 7710.0], [40.3, 7710.0], [40.4, 7710.0], [40.5, 7710.0], [40.6, 7710.0], [40.7, 7710.0], [40.8, 7710.0], [40.9, 7710.0], [41.0, 7724.0], [41.1, 7724.0], [41.2, 7724.0], [41.3, 7724.0], [41.4, 7724.0], [41.5, 7724.0], [41.6, 7724.0], [41.7, 7724.0], [41.8, 7724.0], [41.9, 7724.0], [42.0, 7724.0], [42.1, 7724.0], [42.2, 7724.0], [42.3, 7724.0], [42.4, 7724.0], [42.5, 7724.0], [42.6, 7724.0], [42.7, 7824.0], [42.8, 7824.0], [42.9, 7824.0], [43.0, 7824.0], [43.1, 7824.0], [43.2, 7824.0], [43.3, 7824.0], [43.4, 7824.0], [43.5, 7824.0], [43.6, 7824.0], [43.7, 7824.0], [43.8, 7824.0], [43.9, 7824.0], [44.0, 7824.0], [44.1, 7824.0], [44.2, 7824.0], [44.3, 7917.0], [44.4, 7917.0], [44.5, 7917.0], [44.6, 7917.0], [44.7, 7917.0], [44.8, 7917.0], [44.9, 7917.0], [45.0, 7917.0], [45.1, 7917.0], [45.2, 7917.0], [45.3, 7917.0], [45.4, 7917.0], [45.5, 7917.0], [45.6, 7917.0], [45.7, 7917.0], [45.8, 7917.0], [45.9, 7917.0], [46.0, 7980.0], [46.1, 7980.0], [46.2, 7980.0], [46.3, 7980.0], [46.4, 7980.0], [46.5, 7980.0], [46.6, 7980.0], [46.7, 7980.0], [46.8, 7980.0], [46.9, 7980.0], [47.0, 7980.0], [47.1, 7980.0], [47.2, 7980.0], [47.3, 7980.0], [47.4, 7980.0], [47.5, 7980.0], [47.6, 8033.0], [47.7, 8033.0], [47.8, 8033.0], [47.9, 8033.0], [48.0, 8033.0], [48.1, 8033.0], [48.2, 8033.0], [48.3, 8033.0], [48.4, 8033.0], [48.5, 8033.0], [48.6, 8033.0], [48.7, 8033.0], [48.8, 8033.0], [48.9, 8033.0], [49.0, 8033.0], [49.1, 8033.0], [49.2, 8283.0], [49.3, 8283.0], [49.4, 8283.0], [49.5, 8283.0], [49.6, 8283.0], [49.7, 8283.0], [49.8, 8283.0], [49.9, 8283.0], [50.0, 8283.0], [50.1, 8283.0], [50.2, 8283.0], [50.3, 8283.0], [50.4, 8283.0], [50.5, 8283.0], [50.6, 8283.0], [50.7, 8283.0], [50.8, 8283.0], [50.9, 8484.0], [51.0, 8484.0], [51.1, 8484.0], [51.2, 8484.0], [51.3, 8484.0], [51.4, 8484.0], [51.5, 8484.0], [51.6, 8484.0], [51.7, 8484.0], [51.8, 8484.0], [51.9, 8484.0], [52.0, 8484.0], [52.1, 8484.0], [52.2, 8484.0], [52.3, 8484.0], [52.4, 8484.0], [52.5, 8725.0], [52.6, 8725.0], [52.7, 8725.0], [52.8, 8725.0], [52.9, 8725.0], [53.0, 8725.0], [53.1, 8725.0], [53.2, 8725.0], [53.3, 8725.0], [53.4, 8725.0], [53.5, 8725.0], [53.6, 8725.0], [53.7, 8725.0], [53.8, 8725.0], [53.9, 8725.0], [54.0, 8725.0], [54.1, 9060.0], [54.2, 9060.0], [54.3, 9060.0], [54.4, 9060.0], [54.5, 9060.0], [54.6, 9060.0], [54.7, 9060.0], [54.8, 9060.0], [54.9, 9060.0], [55.0, 9060.0], [55.1, 9060.0], [55.2, 9060.0], [55.3, 9060.0], [55.4, 9060.0], [55.5, 9060.0], [55.6, 9060.0], [55.7, 9060.0], [55.8, 9191.0], [55.9, 9191.0], [56.0, 9191.0], [56.1, 9191.0], [56.2, 9191.0], [56.3, 9191.0], [56.4, 9191.0], [56.5, 9191.0], [56.6, 9191.0], [56.7, 9191.0], [56.8, 9191.0], [56.9, 9191.0], [57.0, 9191.0], [57.1, 9191.0], [57.2, 9191.0], [57.3, 9191.0], [57.4, 9233.0], [57.5, 9233.0], [57.6, 9233.0], [57.7, 9233.0], [57.8, 9233.0], [57.9, 9233.0], [58.0, 9233.0], [58.1, 9233.0], [58.2, 9233.0], [58.3, 9233.0], [58.4, 9233.0], [58.5, 9233.0], [58.6, 9233.0], [58.7, 9233.0], [58.8, 9233.0], [58.9, 9233.0], [59.0, 9233.0], [59.1, 9341.0], [59.2, 9341.0], [59.3, 9341.0], [59.4, 9341.0], [59.5, 9341.0], [59.6, 9341.0], [59.7, 9341.0], [59.8, 9341.0], [59.9, 9341.0], [60.0, 9341.0], [60.1, 9341.0], [60.2, 9341.0], [60.3, 9341.0], [60.4, 9341.0], [60.5, 9341.0], [60.6, 9341.0], [60.7, 9365.0], [60.8, 9365.0], [60.9, 9365.0], [61.0, 9365.0], [61.1, 9365.0], [61.2, 9365.0], [61.3, 9365.0], [61.4, 9365.0], [61.5, 9365.0], [61.6, 9365.0], [61.7, 9365.0], [61.8, 9365.0], [61.9, 9365.0], [62.0, 9365.0], [62.1, 9365.0], [62.2, 9365.0], [62.3, 9374.0], [62.4, 9374.0], [62.5, 9374.0], [62.6, 9374.0], [62.7, 9374.0], [62.8, 9374.0], [62.9, 9374.0], [63.0, 9374.0], [63.1, 9374.0], [63.2, 9374.0], [63.3, 9374.0], [63.4, 9374.0], [63.5, 9374.0], [63.6, 9374.0], [63.7, 9374.0], [63.8, 9374.0], [63.9, 9374.0], [64.0, 9514.0], [64.1, 9514.0], [64.2, 9514.0], [64.3, 9514.0], [64.4, 9514.0], [64.5, 9514.0], [64.6, 9514.0], [64.7, 9514.0], [64.8, 9514.0], [64.9, 9514.0], [65.0, 9514.0], [65.1, 9514.0], [65.2, 9514.0], [65.3, 9514.0], [65.4, 9514.0], [65.5, 9514.0], [65.6, 9557.0], [65.7, 9557.0], [65.8, 9557.0], [65.9, 9557.0], [66.0, 9557.0], [66.1, 9557.0], [66.2, 9557.0], [66.3, 9557.0], [66.4, 9557.0], [66.5, 9557.0], [66.6, 9557.0], [66.7, 9557.0], [66.8, 9557.0], [66.9, 9557.0], [67.0, 9557.0], [67.1, 9557.0], [67.2, 9557.0], [67.3, 9558.0], [67.4, 9558.0], [67.5, 9558.0], [67.6, 9558.0], [67.7, 9558.0], [67.8, 9558.0], [67.9, 9558.0], [68.0, 9558.0], [68.1, 9558.0], [68.2, 9558.0], [68.3, 9558.0], [68.4, 9558.0], [68.5, 9558.0], [68.6, 9558.0], [68.7, 9558.0], [68.8, 9558.0], [68.9, 9689.0], [69.0, 9689.0], [69.1, 9689.0], [69.2, 9689.0], [69.3, 9689.0], [69.4, 9689.0], [69.5, 9689.0], [69.6, 9689.0], [69.7, 9689.0], [69.8, 9689.0], [69.9, 9689.0], [70.0, 9689.0], [70.1, 9689.0], [70.2, 9689.0], [70.3, 9689.0], [70.4, 9689.0], [70.5, 9862.0], [70.6, 9862.0], [70.7, 9862.0], [70.8, 9862.0], [70.9, 9862.0], [71.0, 9862.0], [71.1, 9862.0], [71.2, 9862.0], [71.3, 9862.0], [71.4, 9862.0], [71.5, 9862.0], [71.6, 9862.0], [71.7, 9862.0], [71.8, 9862.0], [71.9, 9862.0], [72.0, 9862.0], [72.1, 9862.0], [72.2, 9898.0], [72.3, 9898.0], [72.4, 9898.0], [72.5, 9898.0], [72.6, 9898.0], [72.7, 9898.0], [72.8, 9898.0], [72.9, 9898.0], [73.0, 9898.0], [73.1, 9898.0], [73.2, 9898.0], [73.3, 9898.0], [73.4, 9898.0], [73.5, 9898.0], [73.6, 9898.0], [73.7, 9898.0], [73.8, 9987.0], [73.9, 9987.0], [74.0, 9987.0], [74.1, 9987.0], [74.2, 9987.0], [74.3, 9987.0], [74.4, 9987.0], [74.5, 9987.0], [74.6, 9987.0], [74.7, 9987.0], [74.8, 9987.0], [74.9, 9987.0], [75.0, 9987.0], [75.1, 9987.0], [75.2, 9987.0], [75.3, 9987.0], [75.4, 9987.0], [75.5, 10027.0], [75.6, 10027.0], [75.7, 10027.0], [75.8, 10027.0], [75.9, 10027.0], [76.0, 10027.0], [76.1, 10027.0], [76.2, 10027.0], [76.3, 10027.0], [76.4, 10027.0], [76.5, 10027.0], [76.6, 10027.0], [76.7, 10027.0], [76.8, 10027.0], [76.9, 10027.0], [77.0, 10027.0], [77.1, 10113.0], [77.2, 10113.0], [77.3, 10113.0], [77.4, 10113.0], [77.5, 10113.0], [77.6, 10113.0], [77.7, 10113.0], [77.8, 10113.0], [77.9, 10113.0], [78.0, 10113.0], [78.1, 10113.0], [78.2, 10113.0], [78.3, 10113.0], [78.4, 10113.0], [78.5, 10113.0], [78.6, 10113.0], [78.7, 10273.0], [78.8, 10273.0], [78.9, 10273.0], [79.0, 10273.0], [79.1, 10273.0], [79.2, 10273.0], [79.3, 10273.0], [79.4, 10273.0], [79.5, 10273.0], [79.6, 10273.0], [79.7, 10273.0], [79.8, 10273.0], [79.9, 10273.0], [80.0, 10273.0], [80.1, 10273.0], [80.2, 10273.0], [80.3, 10273.0], [80.4, 10323.0], [80.5, 10323.0], [80.6, 10323.0], [80.7, 10323.0], [80.8, 10323.0], [80.9, 10323.0], [81.0, 10323.0], [81.1, 10323.0], [81.2, 10323.0], [81.3, 10323.0], [81.4, 10323.0], [81.5, 10323.0], [81.6, 10323.0], [81.7, 10323.0], [81.8, 10323.0], [81.9, 10323.0], [82.0, 10496.0], [82.1, 10496.0], [82.2, 10496.0], [82.3, 10496.0], [82.4, 10496.0], [82.5, 10496.0], [82.6, 10496.0], [82.7, 10496.0], [82.8, 10496.0], [82.9, 10496.0], [83.0, 10496.0], [83.1, 10496.0], [83.2, 10496.0], [83.3, 10496.0], [83.4, 10496.0], [83.5, 10496.0], [83.6, 10496.0], [83.7, 10619.0], [83.8, 10619.0], [83.9, 10619.0], [84.0, 10619.0], [84.1, 10619.0], [84.2, 10619.0], [84.3, 10619.0], [84.4, 10619.0], [84.5, 10619.0], [84.6, 10619.0], [84.7, 10619.0], [84.8, 10619.0], [84.9, 10619.0], [85.0, 10619.0], [85.1, 10619.0], [85.2, 10619.0], [85.3, 10652.0], [85.4, 10652.0], [85.5, 10652.0], [85.6, 10652.0], [85.7, 10652.0], [85.8, 10652.0], [85.9, 10652.0], [86.0, 10652.0], [86.1, 10652.0], [86.2, 10652.0], [86.3, 10652.0], [86.4, 10652.0], [86.5, 10652.0], [86.6, 10652.0], [86.7, 10652.0], [86.8, 10652.0], [86.9, 10750.0], [87.0, 10750.0], [87.1, 10750.0], [87.2, 10750.0], [87.3, 10750.0], [87.4, 10750.0], [87.5, 10750.0], [87.6, 10750.0], [87.7, 10750.0], [87.8, 10750.0], [87.9, 10750.0], [88.0, 10750.0], [88.1, 10750.0], [88.2, 10750.0], [88.3, 10750.0], [88.4, 10750.0], [88.5, 10750.0], [88.6, 10818.0], [88.7, 10818.0], [88.8, 10818.0], [88.9, 10818.0], [89.0, 10818.0], [89.1, 10818.0], [89.2, 10818.0], [89.3, 10818.0], [89.4, 10818.0], [89.5, 10818.0], [89.6, 10818.0], [89.7, 10818.0], [89.8, 10818.0], [89.9, 10818.0], [90.0, 10818.0], [90.1, 10818.0], [90.2, 10925.0], [90.3, 10925.0], [90.4, 10925.0], [90.5, 10925.0], [90.6, 10925.0], [90.7, 10925.0], [90.8, 10925.0], [90.9, 10925.0], [91.0, 10925.0], [91.1, 10925.0], [91.2, 10925.0], [91.3, 10925.0], [91.4, 10925.0], [91.5, 10925.0], [91.6, 10925.0], [91.7, 10925.0], [91.8, 10925.0], [91.9, 10987.0], [92.0, 10987.0], [92.1, 10987.0], [92.2, 10987.0], [92.3, 10987.0], [92.4, 10987.0], [92.5, 10987.0], [92.6, 10987.0], [92.7, 10987.0], [92.8, 10987.0], [92.9, 10987.0], [93.0, 10987.0], [93.1, 10987.0], [93.2, 10987.0], [93.3, 10987.0], [93.4, 10987.0], [93.5, 11009.0], [93.6, 11009.0], [93.7, 11009.0], [93.8, 11009.0], [93.9, 11009.0], [94.0, 11009.0], [94.1, 11009.0], [94.2, 11009.0], [94.3, 11009.0], [94.4, 11009.0], [94.5, 11009.0], [94.6, 11009.0], [94.7, 11009.0], [94.8, 11009.0], [94.9, 11009.0], [95.0, 11009.0], [95.1, 11688.0], [95.2, 11688.0], [95.3, 11688.0], [95.4, 11688.0], [95.5, 11688.0], [95.6, 11688.0], [95.7, 11688.0], [95.8, 11688.0], [95.9, 11688.0], [96.0, 11688.0], [96.1, 11688.0], [96.2, 11688.0], [96.3, 11688.0], [96.4, 11688.0], [96.5, 11688.0], [96.6, 11688.0], [96.7, 11688.0], [96.8, 11767.0], [96.9, 11767.0], [97.0, 11767.0], [97.1, 11767.0], [97.2, 11767.0], [97.3, 11767.0], [97.4, 11767.0], [97.5, 11767.0], [97.6, 11767.0], [97.7, 11767.0], [97.8, 11767.0], [97.9, 11767.0], [98.0, 11767.0], [98.1, 11767.0], [98.2, 11767.0], [98.3, 11767.0], [98.4, 12988.0], [98.5, 12988.0], [98.6, 12988.0], [98.7, 12988.0], [98.8, 12988.0], [98.9, 12988.0], [99.0, 12988.0], [99.1, 12988.0], [99.2, 12988.0], [99.3, 12988.0], [99.4, 12988.0], [99.5, 12988.0], [99.6, 12988.0], [99.7, 12988.0], [99.8, 12988.0], [99.9, 12988.0], [100.0, 12988.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 4000.0, "maxY": 3.0, "series": [{"data": [[8700.0, 1.0], [8200.0, 1.0], [8400.0, 1.0], [9000.0, 1.0], [9100.0, 1.0], [9200.0, 1.0], [9300.0, 3.0], [9500.0, 3.0], [9600.0, 1.0], [9800.0, 2.0], [9900.0, 1.0], [10100.0, 1.0], [10000.0, 1.0], [10200.0, 1.0], [10700.0, 1.0], [10600.0, 2.0], [10300.0, 1.0], [10400.0, 1.0], [10900.0, 2.0], [10800.0, 1.0], [11000.0, 1.0], [11600.0, 1.0], [11700.0, 1.0], [12900.0, 1.0], [4000.0, 1.0], [4400.0, 1.0], [4500.0, 2.0], [4700.0, 2.0], [4800.0, 2.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 1.0], [5700.0, 1.0], [6300.0, 2.0], [6400.0, 3.0], [6500.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7200.0, 1.0], [7600.0, 1.0], [7500.0, 1.0], [7900.0, 2.0], [7700.0, 2.0], [7800.0, 1.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 59.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 59.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 2.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.65393084E12, "maxY": 31.0, "series": [{"data": [[1.65393084E12, 31.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65393084E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 4042.0, "minX": 1.0, "maxY": 12988.0, "series": [{"data": [[2.0, 11767.0], [3.0, 11688.0], [4.0, 11009.0], [5.0, 10496.0], [6.0, 10652.0], [7.0, 10323.0], [8.0, 10987.0], [9.0, 10619.0], [10.0, 10818.0], [11.0, 10750.0], [12.0, 10925.0], [13.0, 10273.0], [14.0, 10027.0], [15.0, 9557.0], [16.0, 10113.0], [17.0, 9987.0], [18.0, 9341.0], [19.0, 9862.0], [20.0, 9374.0], [21.0, 9514.0], [22.0, 9689.0], [23.0, 9558.0], [24.0, 9365.0], [25.0, 9233.0], [26.0, 9191.0], [27.0, 9898.0], [28.0, 9060.0], [29.0, 8484.0], [30.0, 8283.0], [31.0, 8725.0], [33.0, 8033.0], [32.0, 7824.0], [35.0, 7710.0], [34.0, 7577.0], [37.0, 7980.0], [36.0, 7680.0], [39.0, 7917.0], [38.0, 7724.0], [41.0, 7124.0], [40.0, 7291.0], [43.0, 6433.0], [42.0, 6363.0], [45.0, 6883.0], [44.0, 6409.0], [47.0, 6598.0], [46.0, 6399.0], [49.0, 5720.0], [48.0, 6408.0], [51.0, 5180.0], [50.0, 5322.0], [53.0, 4514.0], [52.0, 4968.0], [55.0, 4950.0], [54.0, 4577.0], [57.0, 4718.0], [56.0, 4431.0], [59.0, 4845.0], [58.0, 4896.0], [61.0, 4722.0], [60.0, 4042.0], [1.0, 12988.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[31.0, 8160.557377049181]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 61.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 122.0, "minX": 1.65393084E12, "maxY": 45301.7, "series": [{"data": [[1.65393084E12, 45301.7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.65393084E12, 122.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65393084E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8160.557377049181, "minX": 1.65393084E12, "maxY": 8160.557377049181, "series": [{"data": [[1.65393084E12, 8160.557377049181]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65393084E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 7204.868852459016, "minX": 1.65393084E12, "maxY": 7204.868852459016, "series": [{"data": [[1.65393084E12, 7204.868852459016]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65393084E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 2708.819672131148, "minX": 1.65393084E12, "maxY": 2708.819672131148, "series": [{"data": [[1.65393084E12, 2708.819672131148]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65393084E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 4431.0, "minX": 1.65393084E12, "maxY": 12988.0, "series": [{"data": [[1.65393084E12, 12988.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.65393084E12, 10925.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.65393084E12, 12988.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.65393084E12, 11688.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.65393084E12, 4431.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.65393084E12, 8484.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65393084E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
    data: {"result": {"minY": 4382.0, "minX": 1.0, "maxY": 11727.5, "series": [{"data": [[1.0, 9354.0], [8.0, 7774.0], [4.0, 8604.5], [2.0, 11727.5], [9.0, 8807.0], [12.0, 4870.5], [15.0, 9558.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 4382.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4033.0, "minX": 1.0, "maxY": 8863.5, "series": [{"data": [[1.0, 6940.5], [8.0, 6934.0], [4.0, 7764.5], [2.0, 8863.5], [9.0, 7883.5], [12.0, 4033.0], [15.0, 8710.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[12.0, 4379.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0166666666666666, "minX": 1.65393084E12, "maxY": 1.0166666666666666, "series": [{"data": [[1.65393084E12, 1.0166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65393084E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65393084E12, "maxY": 0.9833333333333333, "series": [{"data": [[1.65393084E12, 0.9833333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.65393084E12, 0.03333333333333333]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.65393084E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65393084E12, "maxY": 0.9833333333333333, "series": [{"data": [[1.65393084E12, 0.03333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.65393084E12, 0.9833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65393084E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.65393084E12, "maxY": 0.9833333333333333, "series": [{"data": [[1.65393084E12, 0.9833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.65393084E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.65393084E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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

