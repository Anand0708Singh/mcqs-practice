// Machine Learning (AI502) Units V & VI Question Bank
window.ML_DATA = [
  {
    "id": 1,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Unsupervised Learning Fundamentals",
    "question": "What is the fundamental distinction between Supervised Learning and Unsupervised Learning?",
    "options": [
      {
        "letter": "A",
        "text": "Supervised learning trains on labeled input-output pairs ($x, y$); Unsupervised learning discovers latent structures in unlabeled data ($x$ only)"
      },
      {
        "letter": "B",
        "text": "Supervised learning requires GPU hardware; Unsupervised learning runs only on CPUs"
      },
      {
        "letter": "C",
        "text": "Supervised learning is only used for image processing; Unsupervised learning is for text only"
      },
      {
        "letter": "D",
        "text": "Unsupervised learning never uses mathematical loss functions"
      }
    ],
    "correct_text": "Supervised learning trains on labeled input-output pairs ($x, y$); Unsupervised learning discovers latent structures in unlabeled data ($x$ only)",
    "explanation": "In unsupervised learning, there are no predefined supervisor targets or ground-truth class labels provided during training.",
    "difficulty": "Easy"
  },
  {
    "id": 2,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Unsupervised Learning Fundamentals",
    "question": "Which of the following tasks is a classic application of Unsupervised Machine Learning?",
    "options": [
      {
        "letter": "A",
        "text": "Customer segmentation and grouping based on purchasing behaviors"
      },
      {
        "letter": "B",
        "text": "Predicting house sale prices from square footage (regression)"
      },
      {
        "letter": "C",
        "text": "Classifying emails into spam or non-spam using labeled examples"
      },
      {
        "letter": "D",
        "text": "Predicting whether a patient has diabetes based on medical ground truth"
      }
    ],
    "correct_text": "Customer segmentation and grouping based on purchasing behaviors",
    "explanation": "Customer segmentation groups unlabeled customer records into clusters based on natural feature similarities.",
    "difficulty": "Easy"
  },
  {
    "id": 3,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Clustering & Partition Methods",
    "question": "What is the objective of partition-based clustering algorithms such as k-Means and k-Medoids?",
    "options": [
      {
        "letter": "A",
        "text": "To partition $n$ unlabeled data points into $k$ distinct clusters such that intra-cluster similarity is maximized and inter-cluster similarity is minimized"
      },
      {
        "letter": "B",
        "text": "To arrange data points into a continuous binary decision tree with infinite depth"
      },
      {
        "letter": "C",
        "text": "To compute regression weights that fit a linear hyperplane"
      },
      {
        "letter": "D",
        "text": "To generate artificial synthetic images from noise vectors"
      }
    ],
    "correct_text": "To partition $n$ unlabeled data points into $k$ distinct clusters such that intra-cluster similarity is maximized and inter-cluster similarity is minimized",
    "explanation": "Partitioning methods divide datasets into $k$ non-overlapping groups optimizing an objective function (e.g. inertia or sum of squared errors).",
    "difficulty": "Medium"
  },
  {
    "id": 4,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Clustering & Partition Methods",
    "question": "How does the k-Medoids (PAM - Partitioning Around Medoids) algorithm fundamentally differ from standard k-Means?",
    "options": [
      {
        "letter": "A",
        "text": "k-Medoids chooses actual representative data points from the dataset as cluster centers, whereas k-Means computes the mathematical mean (centroid)"
      },
      {
        "letter": "B",
        "text": "k-Medoids can only run on labeled categorical data"
      },
      {
        "letter": "C",
        "text": "k-Means is immune to outliers while k-Medoids is heavily distorted by outliers"
      },
      {
        "letter": "D",
        "text": "k-Medoids requires training a deep convolutional neural network"
      }
    ],
    "correct_text": "k-Medoids chooses actual representative data points from the dataset as cluster centers, whereas k-Means computes the mathematical mean (centroid)",
    "explanation": "By selecting real exemplars (medoids) instead of virtual averages (means), k-Medoids is significantly more robust to noise and outliers.",
    "difficulty": "Hard"
  },
  {
    "id": 5,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Clustering & Partition Methods",
    "question": "What common algorithm is used to execute k-Medoids clustering?",
    "options": [
      {
        "letter": "A",
        "text": "PAM (Partitioning Around Medoids)"
      },
      {
        "letter": "B",
        "text": "Backpropagation algorithm"
      },
      {
        "letter": "C",
        "text": "Apriori algorithm"
      },
      {
        "letter": "D",
        "text": "Dijkstra algorithm"
      }
    ],
    "correct_text": "PAM (Partitioning Around Medoids)",
    "explanation": "PAM is the classic standard algorithm for k-Medoids, evaluating whether swapping a medoid with a non-medoid point reduces total dissimilarity.",
    "difficulty": "Medium"
  },
  {
    "id": 6,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Clustering & Partition Methods",
    "question": "What is an inherent limitation of partition-based clustering algorithms like k-Means and k-Medoids?",
    "options": [
      {
        "letter": "A",
        "text": "The number of clusters $k$ must be specified in advance by the user, and they struggle with non-spherical clusters"
      },
      {
        "letter": "B",
        "text": "They cannot run on numerical floating-point vectors"
      },
      {
        "letter": "C",
        "text": "They can only process datasets containing fewer than 50 rows"
      },
      {
        "letter": "D",
        "text": "They require labeled test sets to converge"
      }
    ],
    "correct_text": "The number of clusters $k$ must be specified in advance by the user, and they struggle with non-spherical clusters",
    "explanation": "Choosing an optimal $k$ requires heuristic methods (e.g. Elbow method or Silhouette score), and partitions assume convex spherical geometry.",
    "difficulty": "Medium"
  },
  {
    "id": 7,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical & Density Clustering",
    "question": "What graphical tree diagram is produced by Hierarchical Clustering to visualize nested cluster relationships?",
    "options": [
      {
        "letter": "A",
        "text": "Dendrogram"
      },
      {
        "letter": "B",
        "text": "Histogram"
      },
      {
        "letter": "C",
        "text": "Scatter plot matrix"
      },
      {
        "letter": "D",
        "text": "Confusion Matrix"
      }
    ],
    "correct_text": "Dendrogram",
    "explanation": "A dendrogram illustrates the hierarchical sequence of nested merges (agglomerative) or splits (divisive) across various distance thresholds.",
    "difficulty": "Easy"
  },
  {
    "id": 8,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical & Density Clustering",
    "question": "What is the difference between Agglomerative and Divisive hierarchical clustering?",
    "options": [
      {
        "letter": "A",
        "text": "Agglomerative is bottom-up (starts with individual points and merges clusters); Divisive is top-down (starts with one cluster and splits)"
      },
      {
        "letter": "B",
        "text": "Agglomerative is supervised; Divisive is unsupervised"
      },
      {
        "letter": "C",
        "text": "Agglomerative operates only on images; Divisive operates only on audio"
      },
      {
        "letter": "D",
        "text": "Agglomerative requires defining $k$ in advance, whereas Divisive does not"
      }
    ],
    "correct_text": "Agglomerative is bottom-up (starts with individual points and merges clusters); Divisive is top-down (starts with one cluster and splits)",
    "explanation": "Agglomerative bottom-up clustering starts with $N$ clusters and iteratively joins the closest pair until one cluster remains.",
    "difficulty": "Medium"
  },
  {
    "id": 9,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical & Density Clustering",
    "question": "What is the core principle of Density-Based Clustering algorithms such as DBSCAN?",
    "options": [
      {
        "letter": "A",
        "text": "Clusters are defined as contiguous dense regions of points in data space separated by regions of low density (noise)"
      },
      {
        "letter": "B",
        "text": "Clusters are defined by drawing linear hyperplanes through the global origin"
      },
      {
        "letter": "C",
        "text": "Data points are sorted alphabetically and partitioned into equal quartiles"
      },
      {
        "letter": "D",
        "text": "Clusters must always form perfect geometric hyper-spheres"
      }
    ],
    "correct_text": "Clusters are defined as contiguous dense regions of points in data space separated by regions of low density (noise)",
    "explanation": "DBSCAN discovers clusters of arbitrary shapes and isolates outliers as noise based on density criteria (Eps and MinPts).",
    "difficulty": "Hard"
  },
  {
    "id": 10,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical & Density Clustering",
    "question": "What are the two key user parameters required by the DBSCAN density clustering algorithm?",
    "options": [
      {
        "letter": "A",
        "text": "Epsilon (Eps, neighborhood radius) and MinPts (minimum points in neighborhood)"
      },
      {
        "letter": "B",
        "text": "Learning rate and Momentum"
      },
      {
        "letter": "C",
        "text": "Number of clusters $k$ and maximum tree depth"
      },
      {
        "letter": "D",
        "text": "Kernel size and pooling stride"
      }
    ],
    "correct_text": "Epsilon (Eps, neighborhood radius) and MinPts (minimum points in neighborhood)",
    "explanation": "A point is a core point in DBSCAN if at least MinPts points reside within its radial distance $\\epsilon$ (Eps).",
    "difficulty": "Medium"
  },
  {
    "id": 11,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Association Rule Learning",
    "question": "What is the primary goal of Association Rule Mining in unsupervised learning (e.g. Market Basket Analysis)?",
    "options": [
      {
        "letter": "A",
        "text": "To discover interesting correlations, frequent patterns, and co-occurrence relationships among items in large transaction datasets"
      },
      {
        "letter": "B",
        "text": "To minimize the mean squared error of a continuous price curve"
      },
      {
        "letter": "C",
        "text": "To assign class labels using a maximum-margin hyperplane"
      },
      {
        "letter": "D",
        "text": "To compress high-resolution video streams in real time"
      }
    ],
    "correct_text": "To discover interesting correlations, frequent patterns, and co-occurrence relationships among items in large transaction datasets",
    "explanation": "Association rules (e.g. $\\text{Bread} \\Rightarrow \\text{Butter}$) uncover probabilistic relationships between items purchased or used together.",
    "difficulty": "Medium"
  },
  {
    "id": 12,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Association Rule Learning",
    "question": "In association rule mining, what does the metric 'Support' of an itemset $\\{A, B\\}$ measure?",
    "options": [
      {
        "letter": "A",
        "text": "The proportion of total transactions in the dataset that contain both item $A$ and item $B$"
      },
      {
        "letter": "B",
        "text": "The conditional probability that item $B$ is purchased given that item $A$ was purchased"
      },
      {
        "letter": "C",
        "text": "The ratio of the observed co-occurrence to the expected independence rate"
      },
      {
        "letter": "D",
        "text": "The price difference between item $A$ and item $B$"
      }
    ],
    "correct_text": "The proportion of total transactions in the dataset that contain both item $A$ and item $B$",
    "explanation": "Support measures the statistical frequency or popularity of an itemset across all transactions: $\\text{Support}(X) = \\text{count}(X) / N$.",
    "difficulty": "Hard"
  },
  {
    "id": 13,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Association Rule Learning",
    "question": "In an association rule $A \\Rightarrow B$, what does the metric 'Confidence' measure?",
    "options": [
      {
        "letter": "A",
        "text": "The conditional probability $P(B|A)$ that item $B$ is present given that item $A$ is present in a transaction"
      },
      {
        "letter": "B",
        "text": "The total percentage of all transactions that contain item $A$"
      },
      {
        "letter": "C",
        "text": "The correlation coefficient between the weights of item $A$ and item $B$"
      },
      {
        "letter": "D",
        "text": "The probability that neither item $A$ nor item $B$ appears in the database"
      }
    ],
    "correct_text": "The conditional probability $P(B|A)$ that item $B$ is present given that item $A$ is present in a transaction",
    "explanation": "Confidence gauges rule reliability: $\\text{Confidence}(A \\Rightarrow B) = \\text{Support}(A \\cup B) / \\text{Support}(A)$.",
    "difficulty": "Hard"
  },
  {
    "id": 14,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Association Rule Learning",
    "question": "What classic algorithm utilizes the downward closure property (apriori property) that all subsets of a frequent itemset must also be frequent?",
    "options": [
      {
        "letter": "A",
        "text": "Apriori Algorithm"
      },
      {
        "letter": "B",
        "text": "Dijkstra Algorithm"
      },
      {
        "letter": "C",
        "text": "k-Medoids Algorithm"
      },
      {
        "letter": "D",
        "text": "Backpropagation Algorithm"
      }
    ],
    "correct_text": "Apriori Algorithm",
    "explanation": "The Apriori algorithm prunes candidate itemsets by utilizing the property: if an itemset is infrequent, all its supersets must be infrequent.",
    "difficulty": "Medium"
  },
  {
    "id": 15,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Neural Network Fundamentals",
    "question": "In the biological nervous system, what biological structures correspond roughly to the inputs, weights, cell body, and output of an artificial neuron?",
    "options": [
      {
        "letter": "A",
        "text": "Dendrites (inputs), Synaptic strengths (weights), Soma (cell body/summation), and Axon (output)"
      },
      {
        "letter": "B",
        "text": "Axons (inputs), Dendrites (weights), Nucleus (summation), and Myelin (output)"
      },
      {
        "letter": "C",
        "text": "Cortex (inputs), Neurons (weights), Cerebellum (summation), and Skull (output)"
      },
      {
        "letter": "D",
        "text": "Ventricles (inputs), Spine (weights), Nerves (summation), and Muscles (output)"
      }
    ],
    "correct_text": "Dendrites (inputs), Synaptic strengths (weights), Soma (cell body/summation), and Axon (output)",
    "explanation": "Dendrites receive incoming signals, synapses weight them, the soma integrates them, and the axon transmits the resulting activation.",
    "difficulty": "Medium"
  },
  {
    "id": 16,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Neural Network Fundamentals",
    "question": "What early mathematical model of an artificial neuron was proposed in 1943 by Warren McCulloch and Walter Pitts?",
    "options": [
      {
        "letter": "A",
        "text": "McCulloch-Pitts (MCP) Neuron"
      },
      {
        "letter": "B",
        "text": "Transformer Attention Head"
      },
      {
        "letter": "C",
        "text": "Hopfield Network"
      },
      {
        "letter": "D",
        "text": "Boltzmann Machine"
      }
    ],
    "correct_text": "McCulloch-Pitts (MCP) Neuron",
    "explanation": "The McCulloch-Pitts neuron was the pioneering threshold logic unit capable of computing basic boolean functions (AND, OR, NOT).",
    "difficulty": "Easy"
  },
  {
    "id": 17,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Neural Network Fundamentals",
    "question": "What key improvement did Frank Rosenblatt's Perceptron (1958) introduce over the original McCulloch-Pitts model?",
    "options": [
      {
        "letter": "A",
        "text": "Learnable, dynamically adjustable numerical synaptic weights and a systematic learning algorithm"
      },
      {
        "letter": "B",
        "text": "Multi-head self-attention mechanisms"
      },
      {
        "letter": "C",
        "text": "Automatic generation of labeled training sets"
      },
      {
        "letter": "D",
        "text": "Support for non-linear XOR separation without hidden layers"
      }
    ],
    "correct_text": "Learnable, dynamically adjustable numerical synaptic weights and a systematic learning algorithm",
    "explanation": "Rosenblatt's perceptron introduced an iterative weight update rule that guaranteed convergence for linearly separable patterns.",
    "difficulty": "Medium"
  },
  {
    "id": 18,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Neural Network Fundamentals",
    "question": "What does the ADALINE (Adaptive Linear Neuron) model developed by Widrow and Hoff use for weight updates?",
    "options": [
      {
        "letter": "A",
        "text": "The Delta Rule (Least Mean Squares / LMS / Widrow-Hoff learning rule) based on continuous linear outputs before thresholding"
      },
      {
        "letter": "B",
        "text": "Backpropagation through 50 hidden layers"
      },
      {
        "letter": "C",
        "text": "Genetic crossover algorithms"
      },
      {
        "letter": "D",
        "text": "K-nearest neighbor voting"
      }
    ],
    "correct_text": "The Delta Rule (Least Mean Squares / LMS / Widrow-Hoff learning rule) based on continuous linear outputs before thresholding",
    "explanation": "ADALINE updates weights using the difference between desired target and analog pre-activation linear sum, minimizing Mean Squared Error.",
    "difficulty": "Hard"
  },
  {
    "id": 19,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Activation Functions",
    "question": "Why are non-linear activation functions necessary in multi-layer neural networks?",
    "options": [
      {
        "letter": "A",
        "text": "Without non-linearities, a multi-layer network collapses mathematically into an equivalent single-layer linear model unable to learn complex patterns"
      },
      {
        "letter": "B",
        "text": "Because linear functions consume too much computer RAM"
      },
      {
        "letter": "C",
        "text": "Because CPUs cannot perform matrix addition"
      },
      {
        "letter": "D",
        "text": "To prevent numbers from becoming negative integers"
      }
    ],
    "correct_text": "Without non-linearities, a multi-layer network collapses mathematically into an equivalent single-layer linear model unable to learn complex patterns",
    "explanation": "A composition of linear transformations is strictly another linear transformation; non-linearities enable universal function approximation.",
    "difficulty": "Hard"
  },
  {
    "id": 20,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Activation Functions",
    "question": "What is the mathematical formulation of the Sigmoid activation function, and what is its output range?",
    "options": [
      {
        "letter": "A",
        "text": "$\\sigma(z) = \\frac{1}{1 + e^{-z}}$, producing outputs in the open interval $(0, 1)$"
      },
      {
        "letter": "B",
        "text": "$\\sigma(z) = \\max(0, z)$, producing outputs in $[0, \\infty)$"
      },
      {
        "letter": "C",
        "text": "$\\sigma(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$, producing outputs in $(-1, 1)$"
      },
      {
        "letter": "D",
        "text": "$\\sigma(z) = z$, producing outputs in $(-\\infty, \\infty)$"
      }
    ],
    "correct_text": "$\\sigma(z) = \\frac{1}{1 + e^{-z}}$, producing outputs in the open interval $(0, 1)$",
    "explanation": "Sigmoid squashes real values into probabilities between 0 and 1, commonly used for binary classification output nodes.",
    "difficulty": "Medium"
  },
  {
    "id": 21,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Activation Functions",
    "question": "What is the formula and output range of the Hyperbolic Tangent (tanh) activation function?",
    "options": [
      {
        "letter": "A",
        "text": "$\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$, producing zero-centered outputs in the interval $(-1, 1)$"
      },
      {
        "letter": "B",
        "text": "$\\tanh(z) = \\frac{1}{1 + e^{-z}}$, producing outputs in $(0, 1)$"
      },
      {
        "letter": "C",
        "text": "$\\tanh(z) = \\max(0, z)$, producing outputs in $[0, 1]$"
      },
      {
        "letter": "D",
        "text": "$\\tanh(z) = e^z$, producing outputs in $[1, \\infty)$"
      }
    ],
    "correct_text": "$\\tanh(z) = \\frac{e^z - e^{-z}}{e^z + e^{-z}}$, producing zero-centered outputs in the interval $(-1, 1)$",
    "explanation": "tanh outputs are zero-centered, which often aids gradient descent convergence compared to the strictly positive sigmoid function.",
    "difficulty": "Medium"
  },
  {
    "id": 22,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Activation Functions",
    "question": "What is the formula and primary advantage of the Rectified Linear Unit (ReLU) activation function?",
    "options": [
      {
        "letter": "A",
        "text": "$f(z) = \\max(0, z)$; it is computationally simple and alleviates the vanishing gradient problem in deep networks"
      },
      {
        "letter": "B",
        "text": "$f(z) = 1 / (1 + e^{-z})$; it squashes outputs to zero"
      },
      {
        "letter": "C",
        "text": "$f(z) = z^2$; it makes all negative values positive"
      },
      {
        "letter": "D",
        "text": "$f(z) = \\sin(z)$; it creates periodic smooth outputs"
      }
    ],
    "correct_text": "$f(z) = \\max(0, z)$; it is computationally simple and alleviates the vanishing gradient problem in deep networks",
    "explanation": "ReLU has a constant derivative of 1 for $z > 0$, preventing gradients from vanishing exponentially during backpropagation in deep architectures.",
    "difficulty": "Medium"
  },
  {
    "id": 23,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Activation Functions",
    "question": "Which activation function is standardly used in the final layer of a multi-class classification neural network to output normalized class probabilities?",
    "options": [
      {
        "letter": "A",
        "text": "Softmax function (sums to 1 across all classes)"
      },
      {
        "letter": "B",
        "text": "Identity / Linear function"
      },
      {
        "letter": "C",
        "text": "Binary Step function"
      },
      {
        "letter": "D",
        "text": "Hard Sigmoid function"
      }
    ],
    "correct_text": "Softmax function (sums to 1 across all classes)",
    "explanation": "Softmax normalizes real-valued logits into a categorical probability distribution where all class probabilities sum to exactly 1.0.",
    "difficulty": "Medium"
  },
  {
    "id": 24,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Network Architectures",
    "question": "What is a Single-Layer Feed-Forward Network, and what historic limitation did Minsky and Papert prove in 1969?",
    "options": [
      {
        "letter": "A",
        "text": "A network with one input layer and one output layer; it cannot solve non-linearly separable problems such as the XOR logic function"
      },
      {
        "letter": "B",
        "text": "A network that loops outputs back into inputs indefinitely"
      },
      {
        "letter": "C",
        "text": "A network that cannot compute the AND or OR logic functions"
      },
      {
        "letter": "D",
        "text": "A network that requires quantum computers to train"
      }
    ],
    "correct_text": "A network with one input layer and one output layer; it cannot solve non-linearly separable problems such as the XOR logic function",
    "explanation": "Single-layer perceptrons can only classify linearly separable classes; solving XOR required hidden layers (Multi-Layer Perceptrons).",
    "difficulty": "Hard"
  },
  {
    "id": 25,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Network Architectures",
    "question": "What algorithm enabled the efficient training of Multi-Layer Feed-Forward Networks by computing error gradients layer by layer?",
    "options": [
      {
        "letter": "A",
        "text": "Backpropagation (Backpropagation of Error using the mathematical Chain Rule of calculus)"
      },
      {
        "letter": "B",
        "text": "Apriori candidate generation"
      },
      {
        "letter": "C",
        "text": "DBSCAN density expansion"
      },
      {
        "letter": "D",
        "text": "Bubble sort gradient descent"
      }
    ],
    "correct_text": "Backpropagation (Backpropagation of Error using the mathematical Chain Rule of calculus)",
    "explanation": "Backpropagation propagates output errors backward through hidden layers via the calculus chain rule, calculating partial derivatives with respect to each weight.",
    "difficulty": "Hard"
  },
  {
    "id": 26,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Network Architectures",
    "question": "What is a Recurrent Neural Network (RNN)?",
    "options": [
      {
        "letter": "A",
        "text": "A neural network containing directed cycles in connections, providing internal memory to process sequential/time-series data"
      },
      {
        "letter": "B",
        "text": "A network that discards all previous inputs and operates only on static images"
      },
      {
        "letter": "C",
        "text": "A network with strictly feed-forward connections that cannot process text"
      },
      {
        "letter": "D",
        "text": "A hardware processor that runs without electricity"
      }
    ],
    "correct_text": "A neural network containing directed cycles in connections, providing internal memory to process sequential/time-series data",
    "explanation": "RNNs maintain a hidden recurrent state that retains information across time steps, making them suited for sequence modeling.",
    "difficulty": "Medium"
  },
  {
    "id": 27,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Network Architectures",
    "question": "What key architectural components enable Convolutional Neural Networks (CNNs) to excel in computer vision and image classification?",
    "options": [
      {
        "letter": "A",
        "text": "Convolutional filters with local receptive fields, parameter (weight) sharing, and pooling layers for spatial invariance"
      },
      {
        "letter": "B",
        "text": "Fully recurrent temporal feedback loops at every pixel"
      },
      {
        "letter": "C",
        "text": "Association rule pruning using minimum confidence thresholds"
      },
      {
        "letter": "D",
        "text": "Hierarchical agglomerative dendrogram generation"
      }
    ],
    "correct_text": "Convolutional filters with local receptive fields, parameter (weight) sharing, and pooling layers for spatial invariance",
    "explanation": "CNNs apply learnable spatial filters across feature maps, extracting hierarchical visual features (edges, textures, shapes) efficiently.",
    "difficulty": "Hard"
  },
  {
    "id": 28,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Network Architectures",
    "question": "What revolutionary mechanism powers modern Transformer architectures (such as GPT and BERT) to process long-range dependencies in parallel?",
    "options": [
      {
        "letter": "A",
        "text": "Self-Attention Mechanism (Scaled Dot-Product Self-Attention)"
      },
      {
        "letter": "B",
        "text": "Strictly sequential recurrent state propagation"
      },
      {
        "letter": "C",
        "text": "k-Medoids medoid swapping"
      },
      {
        "letter": "D",
        "text": "Markov Decision Processes without weights"
      }
    ],
    "correct_text": "Self-Attention Mechanism (Scaled Dot-Product Self-Attention)",
    "explanation": "Transformers dispense with recurrence, computing attention scores between all token positions in parallel to model global dependencies.",
    "difficulty": "Hard"
  },
  {
    "id": 29,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Network Architectures",
    "question": "What is a Competitive Neural Network (such as Kohonen's Self-Organizing Map / SOM)?",
    "options": [
      {
        "letter": "A",
        "text": "An unsupervised network where neurons compete to be activated (Winner-Take-All), clustering similar input vectors onto a topological grid"
      },
      {
        "letter": "B",
        "text": "A network where two models predict stock market prices against each other"
      },
      {
        "letter": "C",
        "text": "A network that evaluates chess moves using minimax trees"
      },
      {
        "letter": "D",
        "text": "A multi-layer perceptron trained with cross-entropy loss"
      }
    ],
    "correct_text": "An unsupervised network where neurons compete to be activated (Winner-Take-All), clustering similar input vectors onto a topological grid",
    "explanation": "In competitive learning, the neuron whose weight vector is closest to the input is declared the winner and updates its weights.",
    "difficulty": "Hard"
  },
  {
    "id": 30,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Advanced Learning Paradigms",
    "question": "What is Representation Learning (or Feature Learning) in modern machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "Learning representations of the data that make it easier to extract useful information when building classifiers or other predictors automatically"
      },
      {
        "letter": "B",
        "text": "Manually hand-crafting thousands of CSV columns in Excel"
      },
      {
        "letter": "C",
        "text": "Translating source code into assembly language"
      },
      {
        "letter": "D",
        "text": "Printing machine learning models on paper"
      }
    ],
    "correct_text": "Learning representations of the data that make it easier to extract useful information when building classifiers or other predictors automatically",
    "explanation": "Representation learning automatically discovers optimal feature transformations directly from raw data (e.g. deep autoencoders and embeddings).",
    "difficulty": "Medium"
  },
  {
    "id": 31,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Advanced Learning Paradigms",
    "question": "What is the core premise of Active Learning in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "The learning algorithm interactively queries a human oracle to label only the most informative or uncertain unlabeled data points"
      },
      {
        "letter": "B",
        "text": "Training machine learning models while running physical treadmill exercises"
      },
      {
        "letter": "C",
        "text": "Allowing neural networks to modify their own Python source code"
      },
      {
        "letter": "D",
        "text": "Discarding all training data and using random guesses"
      }
    ],
    "correct_text": "The learning algorithm interactively queries a human oracle to label only the most informative or uncertain unlabeled data points",
    "explanation": "Active learning dramatically reduces labeling costs by strategically asking experts to label instances where the model has highest uncertainty.",
    "difficulty": "Hard"
  },
  {
    "id": 32,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Advanced Learning Paradigms",
    "question": "What is Instance-Based Learning (also known as Lazy Learning)?",
    "options": [
      {
        "letter": "A",
        "text": "Algorithms that delay generalization until a query is made, comparing new instances directly with stored training examples (e.g. k-NN)"
      },
      {
        "letter": "B",
        "text": "Algorithms that train deep neural networks instantly in zero seconds"
      },
      {
        "letter": "C",
        "text": "Algorithms that require no computer memory to run"
      },
      {
        "letter": "D",
        "text": "Algorithms that can only run once before self-destructing"
      }
    ],
    "correct_text": "Algorithms that delay generalization until a query is made, comparing new instances directly with stored training examples (e.g. k-NN)",
    "explanation": "In contrast to eager learners (which build an explicit model during training), lazy learners store instances and evaluate distances at query time.",
    "difficulty": "Medium"
  },
  {
    "id": 33,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Advanced Learning Paradigms",
    "question": "In the k-Nearest Neighbors (k-NN) instance-based algorithm, what is the effect of choosing a very small value of $k$ (e.g. $k = 1$)?",
    "options": [
      {
        "letter": "A",
        "text": "High model complexity with low bias and high variance (prone to overfitting and sensitive to noise)"
      },
      {
        "letter": "B",
        "text": "High bias with an excessively smooth decision boundary (underfitting)"
      },
      {
        "letter": "C",
        "text": "Zero execution time during inference"
      },
      {
        "letter": "D",
        "text": "The model becomes identical to a linear regression line"
      }
    ],
    "correct_text": "High model complexity with low bias and high variance (prone to overfitting and sensitive to noise)",
    "explanation": "$k=1$ captures local noise and creates fragmented boundaries (high variance); larger $k$ produces smoother, more generalized boundaries.",
    "difficulty": "Hard"
  },
  {
    "id": 34,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Ensemble Learning",
    "question": "What is the core concept of Ensemble Learning algorithms in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "Combining the predictions of multiple base models (weak learners) to produce a single superior model with lower variance or bias"
      },
      {
        "letter": "B",
        "text": "Training a single perceptron using only 1 data row"
      },
      {
        "letter": "C",
        "text": "Converting a neural network into an association rule table"
      },
      {
        "letter": "D",
        "text": "Using multiple monitors while coding Python scripts"
      }
    ],
    "correct_text": "Combining the predictions of multiple base models (weak learners) to produce a single superior model with lower variance or bias",
    "explanation": "Ensemble methods (Bagging, Boosting, Stacking) harness the collective wisdom of an ensemble of models to outperform any individual constituent model.",
    "difficulty": "Easy"
  },
  {
    "id": 35,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Ensemble Learning",
    "question": "What is Bagging (Bootstrap Aggregating) in ensemble learning, and what is its primary benefit?",
    "options": [
      {
        "letter": "A",
        "text": "Training multiple base models in parallel on independent bootstrap samples of the data and averaging their predictions to reduce variance (e.g. Random Forest)"
      },
      {
        "letter": "B",
        "text": "Training models sequentially to correct prior mistakes and reduce bias"
      },
      {
        "letter": "C",
        "text": "Compressing datasets using lossy JPEG algorithms"
      },
      {
        "letter": "D",
        "text": "Pruning decision trees until only one leaf node remains"
      }
    ],
    "correct_text": "Training multiple base models in parallel on independent bootstrap samples of the data and averaging their predictions to reduce variance (e.g. Random Forest)",
    "explanation": "Bagging trains models on random subsets with replacement; averaging predictions stabilizes erratic estimators and reduces overfitting.",
    "difficulty": "Hard"
  },
  {
    "id": 36,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Ensemble Learning",
    "question": "What is Boosting (e.g. AdaBoost, Gradient Boosting, XGBoost) in ensemble learning?",
    "options": [
      {
        "letter": "A",
        "text": "An ensemble technique where base models are trained sequentially, with each new model focusing on correcting the errors made by previous models"
      },
      {
        "letter": "B",
        "text": "Running machine learning scripts with elevated CPU overclocking"
      },
      {
        "letter": "C",
        "text": "Averaging predictions from 100 identical linear regressions"
      },
      {
        "letter": "D",
        "text": "Normalizing data features between 0 and 1"
      }
    ],
    "correct_text": "An ensemble technique where base models are trained sequentially, with each new model focusing on correcting the errors made by previous models",
    "explanation": "Boosting builds models sequentially, adaptively reweighting misclassified samples or fitting pseudo-residuals to reduce bias.",
    "difficulty": "Hard"
  },
  {
    "id": 37,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Regularization Algorithms",
    "question": "What is the primary purpose of Regularization algorithms in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "To prevent overfitting by penalizing overly complex models and large weight parameters"
      },
      {
        "letter": "B",
        "text": "To speed up database file downloading over Wi-Fi"
      },
      {
        "letter": "C",
        "text": "To convert supervised models into unsupervised clustering models"
      },
      {
        "letter": "D",
        "text": "To eliminate the need for an activation function in neural networks"
      }
    ],
    "correct_text": "To prevent overfitting by penalizing overly complex models and large weight parameters",
    "explanation": "Regularization adds a penalty term to the loss function ($J(\\theta) + \\lambda \\cdot \\Omega(\\theta)$) to discourage model complexity.",
    "difficulty": "Medium"
  },
  {
    "id": 38,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Regularization Algorithms",
    "question": "What penalty is added to the loss function in L1 Regularization (Lasso), and what distinctive feature does it produce?",
    "options": [
      {
        "letter": "A",
        "text": "L1 adds the sum of absolute values of weights ($\\lambda \\sum |w_i|$); it drives irrelevant feature weights strictly to zero, performing feature selection"
      },
      {
        "letter": "B",
        "text": "L1 adds the sum of squared weights; it shrinks weights smoothly without zeroing"
      },
      {
        "letter": "C",
        "text": "L1 multiplies weights by the learning rate"
      },
      {
        "letter": "D",
        "text": "L1 removes all bias terms from the model"
      }
    ],
    "correct_text": "L1 adds the sum of absolute values of weights ($\\lambda \\sum |w_i|$); it drives irrelevant feature weights strictly to zero, performing feature selection",
    "explanation": "Lasso (L1) yields sparse weight vectors, effectively eliminating uninformative features by setting their coefficients exactly to 0.",
    "difficulty": "Hard"
  },
  {
    "id": 39,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Regularization Algorithms",
    "question": "What penalty is added to the loss function in L2 Regularization (Ridge / Weight Decay)?",
    "options": [
      {
        "letter": "A",
        "text": "L2 adds the sum of squared weights ($\\lambda \\sum w_i^2$); it shrinks weights close to zero, preventing any single feature from dominating"
      },
      {
        "letter": "B",
        "text": "L2 adds the sum of absolute values of weights"
      },
      {
        "letter": "C",
        "text": "L2 divides weights by the number of training samples"
      },
      {
        "letter": "D",
        "text": "L2 sets all weights to positive integers"
      }
    ],
    "correct_text": "L2 adds the sum of squared weights ($\\lambda \\sum w_i^2$); it shrinks weights close to zero, preventing any single feature from dominating",
    "explanation": "Ridge (L2) penalizes large weights proportionally to their square, distributing weight values smoothly and mitigating multicollinearity.",
    "difficulty": "Hard"
  },
  {
    "id": 40,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Regularization Algorithms",
    "question": "What popular neural network regularization technique randomly deactivates a subset of neurons during each forward/backward training pass?",
    "options": [
      {
        "letter": "A",
        "text": "Dropout"
      },
      {
        "letter": "B",
        "text": "Early Stopping"
      },
      {
        "letter": "C",
        "text": "Data Augmentation"
      },
      {
        "letter": "D",
        "text": "Batch Normalization"
      }
    ],
    "correct_text": "Dropout",
    "explanation": "Dropout forces the network to learn redundant, robust representations by preventing neurons from co-adapting excessively to specific features.",
    "difficulty": "Medium"
  },
  {
    "id": 41,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Generative Models",
    "question": "What is the fundamental difference between Discriminative Models and Generative Models?",
    "options": [
      {
        "letter": "A",
        "text": "Discriminative models model the conditional probability $P(y|x)$ to predict labels; Generative models model the joint distribution $P(x, y)$ or $P(x)$ to generate new data"
      },
      {
        "letter": "B",
        "text": "Discriminative models generate realistic synthetic images; Generative models output binary numbers"
      },
      {
        "letter": "C",
        "text": "Discriminative models are unsupervised; Generative models are supervised"
      },
      {
        "letter": "D",
        "text": "Generative models can only calculate linear regression slopes"
      }
    ],
    "correct_text": "Discriminative models model the conditional probability $P(y|x)$ to predict labels; Generative models model the joint distribution $P(x, y)$ or $P(x)$ to generate new data",
    "explanation": "Discriminative models find decision boundaries between classes, whereas generative models capture underlying data distributions to synthesize realistic new samples.",
    "difficulty": "Hard"
  },
  {
    "id": 42,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Generative Models",
    "question": "What two neural network models compete against each other in a Generative Adversarial Network (GAN) framework?",
    "options": [
      {
        "letter": "A",
        "text": "A Generator (which synthesizes realistic fake data) and a Discriminator (which distinguishes real samples from generated fakes)"
      },
      {
        "letter": "B",
        "text": "An Encoder and a Decoder"
      },
      {
        "letter": "C",
        "text": "A Perceptron and an ADALINE"
      },
      {
        "letter": "D",
        "text": "A Regressor and a Classifier"
      }
    ],
    "correct_text": "A Generator (which synthesizes realistic fake data) and a Discriminator (which distinguishes real samples from generated fakes)",
    "explanation": "In a GAN, the generator strives to deceive the discriminator, while the discriminator strives to detect counterfeit samples in a minimax game.",
    "difficulty": "Hard"
  },
  {
    "id": 43,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Generative Models",
    "question": "What is a Variational Autoencoder (VAE)?",
    "options": [
      {
        "letter": "A",
        "text": "A directed probabilistic generative model that encodes inputs into a continuous latent distribution and decodes samples back to data space"
      },
      {
        "letter": "B",
        "text": "A lossy compression tool for MP3 audio files"
      },
      {
        "letter": "C",
        "text": "A simple decision tree with variance pruning"
      },
      {
        "letter": "D",
        "text": "A linear regression model that predicts continuous real values"
      }
    ],
    "correct_text": "A directed probabilistic generative model that encodes inputs into a continuous latent distribution and decodes samples back to data space",
    "explanation": "VAEs regularize the latent space by penalizing divergence from a prior distribution (typically Gaussian using KL-divergence), enabling smooth generative sampling.",
    "difficulty": "Hard"
  },
  {
    "id": 44,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Reinforcement Learning",
    "question": "What is the foundational framework of Reinforcement Learning (RL)?",
    "options": [
      {
        "letter": "A",
        "text": "An Agent interacts with an Environment through Actions, receives Observations and scalar Rewards, and learns a Policy to maximize cumulative reward"
      },
      {
        "letter": "B",
        "text": "Training a model using a pre-labeled spreadsheet of inputs and outputs"
      },
      {
        "letter": "C",
        "text": "Partitioning unlabeled customer data into $k$ spherical clusters"
      },
      {
        "letter": "D",
        "text": "Compressing text files using Huffman coding"
      }
    ],
    "correct_text": "An Agent interacts with an Environment through Actions, receives Observations and scalar Rewards, and learns a Policy to maximize cumulative reward",
    "explanation": "RL does not rely on explicit input-output supervisory pairs; instead, an agent learns optimal behavior through trial-and-error reward signals.",
    "difficulty": "Medium"
  },
  {
    "id": 45,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Reinforcement Learning",
    "question": "What mathematical framework is standardly used to formalize discrete Reinforcement Learning problems?",
    "options": [
      {
        "letter": "A",
        "text": "Markov Decision Process (MDP defined by States, Actions, Transition Probabilities, Rewards, and Discount Factor $\\gamma$)"
      },
      {
        "letter": "B",
        "text": "Normal Gaussian Bell Curve"
      },
      {
        "letter": "C",
        "text": "Boolean Algebra Truth Table"
      },
      {
        "letter": "D",
        "text": "Linear Programming Simplex Method"
      }
    ],
    "correct_text": "Markov Decision Process (MDP defined by States, Actions, Transition Probabilities, Rewards, and Discount Factor $\\gamma$)",
    "explanation": "MDPs provide the mathematical foundation for RL, formalizing environments where outcomes are partly random and partly under agent control.",
    "difficulty": "Hard"
  },
  {
    "id": 46,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Reinforcement Learning",
    "question": "What is the fundamental dilemma between 'Exploration' and 'Exploitation' in Reinforcement Learning?",
    "options": [
      {
        "letter": "A",
        "text": "Balancing between trying unfamiliar actions to discover better future rewards (exploration) and executing known actions yielding high current reward (exploitation)"
      },
      {
        "letter": "B",
        "text": "Balancing computer memory usage and CPU clock frequency"
      },
      {
        "letter": "C",
        "text": "Balancing dataset downloading speed and storage capacity"
      },
      {
        "letter": "D",
        "text": "Balancing keyboard typing speed and mouse scrolling"
      }
    ],
    "correct_text": "Balancing between trying unfamiliar actions to discover better future rewards (exploration) and executing known actions yielding high current reward (exploitation)",
    "explanation": "If an agent only exploits known paths, it may miss superior strategies; if it only explores, it fails to capitalize on learned optimal behaviors.",
    "difficulty": "Medium"
  },
  {
    "id": 47,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Reinforcement Learning",
    "question": "What is Q-Learning in Reinforcement Learning?",
    "options": [
      {
        "letter": "A",
        "text": "A model-free, off-policy temporal difference algorithm that learns the quality (Q-value) of taking an action in a given state"
      },
      {
        "letter": "B",
        "text": "A supervised algorithm for image segmentation"
      },
      {
        "letter": "C",
        "text": "A clustering technique that builds dendrogram trees"
      },
      {
        "letter": "D",
        "text": "An algorithm that calculates shortest paths on network routers"
      }
    ],
    "correct_text": "A model-free, off-policy temporal difference algorithm that learns the quality (Q-value) of taking an action in a given state",
    "explanation": "Q-Learning updates state-action values using the Bellman optimality equation: $Q(s, a) \\leftarrow Q(s, a) + \\alpha [r + \\gamma \\max_{a'} Q(s', a') - Q(s, a)]$.",
    "difficulty": "Hard"
  },
  {
    "id": 48,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Clustering & Partition Methods",
    "question": "Which metric is commonly used in k-Means clustering to evaluate cluster compactness and determine the optimal number of clusters via the Elbow method?",
    "options": [
      {
        "letter": "A",
        "text": "Within-Cluster Sum of Squares (WCSS) / Inertia"
      },
      {
        "letter": "B",
        "text": "Binary Cross-Entropy Loss"
      },
      {
        "letter": "C",
        "text": "Mean Absolute Percentage Error (MAPE)"
      },
      {
        "letter": "D",
        "text": "Area Under the ROC Curve (AUC)"
      }
    ],
    "correct_text": "Within-Cluster Sum of Squares (WCSS) / Inertia",
    "explanation": "The Elbow method plots WCSS against k; the point where the rate of decrease sharply shifts (elbow point) represents an optimal cluster tradeoff.",
    "difficulty": "Medium"
  },
  {
    "id": 49,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Clustering & Partition Methods",
    "question": "What is the Silhouette Coefficient and what does a value close to +1 indicate?",
    "options": [
      {
        "letter": "A",
        "text": "A measure of how similar an object is to its own cluster compared to other clusters; +1 indicates highly dense and well-separated clusters"
      },
      {
        "letter": "B",
        "text": "A measure of classification accuracy on training data; +1 indicates zero false positives"
      },
      {
        "letter": "C",
        "text": "A measure of model parameter size; +1 indicates 1 million parameters"
      },
      {
        "letter": "D",
        "text": "A test of gradient vanishing in recurrent neural networks"
      }
    ],
    "correct_text": "A measure of how similar an object is to its own cluster compared to other clusters; +1 indicates highly dense and well-separated clusters",
    "explanation": "Silhouette score ranges from -1 to +1, where values near +1 indicate sample is far from neighboring clusters and tightly bound to its own.",
    "difficulty": "Hard"
  },
  {
    "id": 50,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical Clustering",
    "question": "What is the fundamental difference between Agglomerative and Divisive hierarchical clustering?",
    "options": [
      {
        "letter": "A",
        "text": "Agglomerative is a bottom-up approach merging pairs of clusters; Divisive is a top-down approach splitting clusters"
      },
      {
        "letter": "B",
        "text": "Agglomerative uses neural networks; Divisive uses decision trees"
      },
      {
        "letter": "C",
        "text": "Agglomerative requires predefined cluster counts k; Divisive does not"
      },
      {
        "letter": "D",
        "text": "Agglomerative applies only to continuous 1D data; Divisive applies to multi-dimensional data"
      }
    ],
    "correct_text": "Agglomerative is a bottom-up approach merging pairs of clusters; Divisive is a top-down approach splitting clusters",
    "explanation": "Agglomerative starts with each point as an individual singleton cluster and merges nearest clusters until one cluster remains.",
    "difficulty": "Medium"
  },
  {
    "id": 51,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical Clustering",
    "question": "What tree-like diagram is generated by hierarchical clustering to visualize nested clusters and merge distances?",
    "options": [
      {
        "letter": "A",
        "text": "Dendrogram"
      },
      {
        "letter": "B",
        "text": "Histogram"
      },
      {
        "letter": "C",
        "text": "Box-and-whisker plot"
      },
      {
        "letter": "D",
        "text": "Scatter plot matrix"
      }
    ],
    "correct_text": "Dendrogram",
    "explanation": "A dendrogram illustrates the hierarchical sequence of cluster joins or divisions, and vertical cuts indicate chosen cluster partitions.",
    "difficulty": "Easy"
  },
  {
    "id": 52,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Hierarchical Clustering",
    "question": "In hierarchical clustering, what is 'Complete Linkage'?",
    "options": [
      {
        "letter": "A",
        "text": "Computing distance between two clusters as the maximum distance between any single point in Cluster A and any single point in Cluster B"
      },
      {
        "letter": "B",
        "text": "Computing distance as the minimum distance between closest points (single linkage)"
      },
      {
        "letter": "C",
        "text": "Computing distance as the distance between cluster centroids"
      },
      {
        "letter": "D",
        "text": "Computing distance using random sampling of points"
      }
    ],
    "correct_text": "Computing distance between two clusters as the maximum distance between any single point in Cluster A and any single point in Cluster B",
    "explanation": "Complete linkage measures the maximum pairwise distance, producing more compact, sphere-like clusters than single linkage.",
    "difficulty": "Hard"
  },
  {
    "id": 53,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Density-Based Clustering",
    "question": "In the DBSCAN algorithm, what is a 'Core Point'?",
    "options": [
      {
        "letter": "A",
        "text": "A point that has at least MinPts within its Eps (epsilon) neighborhood radius"
      },
      {
        "letter": "B",
        "text": "A point that has zero neighbors within its radius"
      },
      {
        "letter": "C",
        "text": "The mathematical arithmetic mean of all data points"
      },
      {
        "letter": "D",
        "text": "The point with the highest prediction confidence in a classifier"
      }
    ],
    "correct_text": "A point that has at least MinPts within its Eps (epsilon) neighborhood radius",
    "explanation": "DBSCAN classifies points as Core points (dense neighborhood >= MinPts), Border points (reachable from core), or Noise (outliers).",
    "difficulty": "Medium"
  },
  {
    "id": 54,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Density-Based Clustering",
    "question": "What major advantage does DBSCAN possess over standard k-Means clustering?",
    "options": [
      {
        "letter": "A",
        "text": "DBSCAN can discover arbitrarily shaped clusters and is naturally resilient to noise and outliers without requiring k in advance"
      },
      {
        "letter": "B",
        "text": "DBSCAN is faster than O(1) constant time"
      },
      {
        "letter": "C",
        "text": "DBSCAN is guaranteed to find global optimal hyperplane boundaries"
      },
      {
        "letter": "D",
        "text": "DBSCAN does not require distance metric computation"
      }
    ],
    "correct_text": "DBSCAN can discover arbitrarily shaped clusters and is naturally resilient to noise and outliers without requiring k in advance",
    "explanation": "k-Means assumes spherical clusters of equal size, whereas DBSCAN forms clusters around dense contiguous regions of arbitrary shape.",
    "difficulty": "Medium"
  },
  {
    "id": 55,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Pattern Finding & Association Rules",
    "question": "In association rule mining, what does the 'Lift' of an association rule A -> B represent?",
    "options": [
      {
        "letter": "A",
        "text": "The ratio of observed joint confidence to expected confidence if A and B were completely statistically independent"
      },
      {
        "letter": "B",
        "text": "The total number of transactions containing item A divided by total transactions"
      },
      {
        "letter": "C",
        "text": "The percentage of transactions containing B that also contain A"
      },
      {
        "letter": "D",
        "text": "The execution speed of the Apriori algorithm"
      }
    ],
    "correct_text": "The ratio of observed joint confidence to expected confidence if A and B were completely statistically independent",
    "explanation": "Lift = P(A and B) / (P(A) * P(B)). A lift > 1 indicates positive dependence; lift = 1 indicates independence; lift < 1 indicates negative correlation.",
    "difficulty": "Hard"
  },
  {
    "id": 56,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Pattern Finding & Association Rules",
    "question": "What is the core pruning principle of the Apriori algorithm?",
    "options": [
      {
        "letter": "A",
        "text": "If an itemset is infrequent, then all of its supersets are guaranteed to be infrequent and can be pruned immediately"
      },
      {
        "letter": "B",
        "text": "All subsets of an infrequent itemset must be frequent"
      },
      {
        "letter": "C",
        "text": "Frequent itemsets cannot contain more than two items"
      },
      {
        "letter": "D",
        "text": "Only items with zero transaction frequency are evaluated"
      }
    ],
    "correct_text": "If an itemset is infrequent, then all of its supersets are guaranteed to be infrequent and can be pruned immediately",
    "explanation": "The downward-closure (anti-monotonicity) property states that any subset of a frequent itemset must be frequent, allowing massive search space pruning.",
    "difficulty": "Hard"
  },
  {
    "id": 57,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "What mathematical structure models the biological neuron's dendrites, cell body (soma), and axon in an Artificial Neuron?",
    "options": [
      {
        "letter": "A",
        "text": "Inputs with synaptic weights (dendrites), summation and bias (soma), and activation function output (axon)"
      },
      {
        "letter": "B",
        "text": "Database tables (dendrites), SQL queries (soma), and CSV exports (axon)"
      },
      {
        "letter": "C",
        "text": "RAM addresses (dendrites), CPU clock (soma), and Cache (axon)"
      },
      {
        "letter": "D",
        "text": "Network packets (dendrites), router buffer (soma), and switch port (axon)"
      }
    ],
    "correct_text": "Inputs with synaptic weights (dendrites), summation and bias (soma), and activation function output (axon)",
    "explanation": "The artificial neuron multiplies incoming signals by weights, sums them with a bias offset, and passes the sum through an activation function.",
    "difficulty": "Easy"
  },
  {
    "id": 58,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "What was a key historical limitation of the single-layer McCulloch-Pitts neuron and Rosenblatt Perceptron?",
    "options": [
      {
        "letter": "A",
        "text": "They could only classify linearly separable functions and could not learn the non-linear XOR (Exclusive OR) function"
      },
      {
        "letter": "B",
        "text": "They could not perform additions or subtractions"
      },
      {
        "letter": "C",
        "text": "They required quantum computers to compute outputs"
      },
      {
        "letter": "D",
        "text": "They could only process text strings, not numeric vectors"
      }
    ],
    "correct_text": "They could only classify linearly separable functions and could not learn the non-linear XOR (Exclusive OR) function",
    "explanation": "Minsky and Papert demonstrated in 1969 that single-layer perceptrons cannot separate non-linear logical functions like XOR.",
    "difficulty": "Medium"
  },
  {
    "id": 59,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "What is the mathematical definition and range of the Sigmoid activation function?",
    "options": [
      {
        "letter": "A",
        "text": "sigma(z) = 1 / (1 + exp(-z)), with output bounded between (0, 1)"
      },
      {
        "letter": "B",
        "text": "sigma(z) = max(0, z), with output unbounded between [0, infinity)"
      },
      {
        "letter": "C",
        "text": "sigma(z) = (exp(z) - exp(-z)) / (exp(z) + exp(-z)), with output between (-1, 1)"
      },
      {
        "letter": "D",
        "text": "sigma(z) = z, with output in (-infinity, +infinity)"
      }
    ],
    "correct_text": "sigma(z) = 1 / (1 + exp(-z)), with output bounded between (0, 1)",
    "explanation": "Sigmoid squashes input real values into the range (0, 1), making it ideal for modeling Bernoulli probabilities.",
    "difficulty": "Medium"
  },
  {
    "id": 60,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "Why is the ReLU (Rectified Linear Unit) activation function preferred over Sigmoid in deep hidden layers?",
    "options": [
      {
        "letter": "A",
        "text": "ReLU avoids vanishing gradient problem for positive values (derivative is constant 1) and is computationally fast"
      },
      {
        "letter": "B",
        "text": "ReLU restricts all activations strictly between -1 and +1"
      },
      {
        "letter": "C",
        "text": "ReLU completely eliminates the need for backpropagation"
      },
      {
        "letter": "D",
        "text": "ReLU converts multi-class predictions into text tokens automatically"
      }
    ],
    "correct_text": "ReLU avoids vanishing gradient problem for positive values (derivative is constant 1) and is computationally fast",
    "explanation": "For positive inputs, ReLU has gradient 1, which prevents gradients from saturating and diminishing across deep layered architectures.",
    "difficulty": "Medium"
  },
  {
    "id": 61,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "What activation function is standardly placed at the output layer of a multi-class neural network classifier to generate a normalized probability distribution across K classes?",
    "options": [
      {
        "letter": "A",
        "text": "Softmax"
      },
      {
        "letter": "B",
        "text": "Step function"
      },
      {
        "letter": "C",
        "text": "Identity function"
      },
      {
        "letter": "D",
        "text": "Hyperbolic tangent (tanh)"
      }
    ],
    "correct_text": "Softmax",
    "explanation": "Softmax exponentiates logits and divides each by the sum of exponentials, ensuring all output values are positive and sum exactly to 1.",
    "difficulty": "Easy"
  },
  {
    "id": 62,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "What is ADALINE (Adaptive Linear Neuron) and what learning rule did Bernard Widrow introduce with it?",
    "options": [
      {
        "letter": "A",
        "text": "ADALINE uses continuous linear activations for weight updates via the Delta rule (Least Mean Squares / Widrow-Hoff learning rule)"
      },
      {
        "letter": "B",
        "text": "ADALINE uses discrete hard-limiting step functions for gradient descent"
      },
      {
        "letter": "C",
        "text": "ADALINE is an unsupervised clustering algorithm"
      },
      {
        "letter": "D",
        "text": "ADALINE uses convolutional kernels to process audio signals"
      }
    ],
    "correct_text": "ADALINE uses continuous linear activations for weight updates via the Delta rule (Least Mean Squares / Widrow-Hoff learning rule)",
    "explanation": "Unlike the original perceptron which updated weights based on quantized binary step outputs, ADALINE updates weights based on continuous linear errors.",
    "difficulty": "Hard"
  },
  {
    "id": 63,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "How does the Backpropagation algorithm compute parameter gradients in a Multi-Layer Feedforward Network?",
    "options": [
      {
        "letter": "A",
        "text": "By applying the differential Calculus Chain Rule backward from the output layer through hidden layers"
      },
      {
        "letter": "B",
        "text": "By brute-force random guessing of every weight matrix"
      },
      {
        "letter": "C",
        "text": "By flipping binary weights alternately in forward passes"
      },
      {
        "letter": "D",
        "text": "By applying Fourier transforms to input data"
      }
    ],
    "correct_text": "By applying the differential Calculus Chain Rule backward from the output layer through hidden layers",
    "explanation": "Backpropagation calculates partial derivatives of the loss function with respect to each weight using the chain rule, enabling gradient descent updates.",
    "difficulty": "Hard"
  },
  {
    "id": 64,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "In a Convolutional Neural Network (CNN), what is the primary role of Pooling (e.g. Max Pooling) layers?",
    "options": [
      {
        "letter": "A",
        "text": "To downsample spatial feature map dimensions, reduce computational parameters, and provide translation invariance"
      },
      {
        "letter": "B",
        "text": "To increase image resolution and pixel depth"
      },
      {
        "letter": "C",
        "text": "To convert 2D images directly into text labels without matrix operations"
      },
      {
        "letter": "D",
        "text": "To generate negative weights for regularization"
      }
    ],
    "correct_text": "To downsample spatial feature map dimensions, reduce computational parameters, and provide translation invariance",
    "explanation": "Max pooling extracts the maximum value within localized windows, reducing spatial dimensions while retaining salient feature responses.",
    "difficulty": "Medium"
  },
  {
    "id": 65,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit V: Unsupervised Learning & Neural Networks",
    "topic": "Basics of Neural Networks",
    "question": "What foundational architectural mechanism allows Transformers to process sequential data in parallel and capture long-range contextual relationships?",
    "options": [
      {
        "letter": "A",
        "text": "Self-Attention Mechanism (Query, Key, Value dot-product attention)"
      },
      {
        "letter": "B",
        "text": "Sequential recurrent hidden loops like standard RNNs"
      },
      {
        "letter": "C",
        "text": "Greedy search pruning of tree branches"
      },
      {
        "letter": "D",
        "text": "Random dropout of 95% of neurons in every layer"
      }
    ],
    "correct_text": "Self-Attention Mechanism (Query, Key, Value dot-product attention)",
    "explanation": "Transformers replace sequential recurrence with multi-head self-attention: Attention(Q, K, V) = softmax(QK^T / sqrt(d_k)) V.",
    "difficulty": "Hard"
  },
  {
    "id": 66,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Representation Learning",
    "question": "What is Representation Learning in modern Machine Learning?",
    "options": [
      {
        "letter": "A",
        "text": "Learning feature representations directly from raw data that make it easier to extract useful information when building classifiers or predictors"
      },
      {
        "letter": "B",
        "text": "Drawing manual flowchart representations of code logic"
      },
      {
        "letter": "C",
        "text": "Hardcoding hand-crafted mathematical rules for each dataset feature"
      },
      {
        "letter": "D",
        "text": "Creating UML class diagrams for software architecture"
      }
    ],
    "correct_text": "Learning feature representations directly from raw data that make it easier to extract useful information when building classifiers or predictors",
    "explanation": "Deep neural networks automate feature engineering by learning hierarchical representations (low-level edges to high-level abstract concepts).",
    "difficulty": "Medium"
  },
  {
    "id": 67,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Representation Learning",
    "question": "What is an Autoencoder in unsupervised representation learning?",
    "options": [
      {
        "letter": "A",
        "text": "A neural network trained to reconstruct its input through a bottleneck layer (encoder + latent space + decoder)"
      },
      {
        "letter": "B",
        "text": "An automated bot that generates unit tests for code"
      },
      {
        "letter": "C",
        "text": "A linear regression model that predicts continuous housing prices"
      },
      {
        "letter": "D",
        "text": "A hardware compiler for GPUs"
      }
    ],
    "correct_text": "A neural network trained to reconstruct its input through a bottleneck layer (encoder + latent space + decoder)",
    "explanation": "Autoencoders force the network to discover compressed latent representations of data by minimizing input-reconstruction error.",
    "difficulty": "Medium"
  },
  {
    "id": 68,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Active Learning",
    "question": "What is the core premise of Active Learning?",
    "options": [
      {
        "letter": "A",
        "text": "The learning algorithm actively queries an oracle (e.g. human expert) to label specific unlabeled instances where uncertainty is highest"
      },
      {
        "letter": "B",
        "text": "The computer screen remains active and never sleeps during training"
      },
      {
        "letter": "C",
        "text": "The model only trains while the user actively types on the keyboard"
      },
      {
        "letter": "D",
        "text": "Running machine learning algorithms on active server clusters"
      }
    ],
    "correct_text": "The learning algorithm actively queries an oracle (e.g. human expert) to label specific unlabeled instances where uncertainty is highest",
    "explanation": "Active learning maximizes model accuracy with minimal labeling costs by selectively querying labels for the most informative or ambiguous data points.",
    "difficulty": "Medium"
  },
  {
    "id": 69,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Instance-Based Learning",
    "question": "What defines an Instance-Based (or Memory-Based / Lazy) learner such as k-Nearest Neighbors (k-NN)?",
    "options": [
      {
        "letter": "A",
        "text": "It defers generalization and model building until a query or test instance needs to be evaluated"
      },
      {
        "letter": "B",
        "text": "It precomputes a compact global parametric mathematical equation during training"
      },
      {
        "letter": "C",
        "text": "It generates synthetic labeled instances to double training size"
      },
      {
        "letter": "D",
        "text": "It requires retraining weights through thousands of backpropagation epochs"
      }
    ],
    "correct_text": "It defers generalization and model building until a query or test instance needs to be evaluated",
    "explanation": "Instance-based learners simply store the training instances; computation occurs at prediction time by evaluating distances to stored exemplars.",
    "difficulty": "Medium"
  },
  {
    "id": 70,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Ensemble Learning",
    "question": "What is Bagging (Bootstrap Aggregating) in ensemble learning, and which popular algorithm is based on it?",
    "options": [
      {
        "letter": "A",
        "text": "Training multiple base models on bootstrap subsets of data with replacement and averaging predictions; Random Forest is a prominent example"
      },
      {
        "letter": "B",
        "text": "Training models sequentially to correct previous errors; AdaBoost is an example"
      },
      {
        "letter": "C",
        "text": "Combining models by training a meta-model on their output probabilities; Stacking is an example"
      },
      {
        "letter": "D",
        "text": "Training a single deep neural network with 100 hidden layers"
      }
    ],
    "correct_text": "Training multiple base models on bootstrap subsets of data with replacement and averaging predictions; Random Forest is a prominent example",
    "explanation": "Bagging reduces variance by aggregating predictions of diverse models trained on independent bootstrap samples of the training data.",
    "difficulty": "Medium"
  },
  {
    "id": 71,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Ensemble Learning",
    "question": "What is Boosting in ensemble machine learning, and how does it differ from Bagging?",
    "options": [
      {
        "letter": "A",
        "text": "Boosting trains models sequentially where each subsequent learner focuses on correcting errors made by previous models, primarily reducing bias"
      },
      {
        "letter": "B",
        "text": "Boosting trains models in parallel completely independent of one another"
      },
      {
        "letter": "C",
        "text": "Boosting randomly prunes 50% of the training features before classification"
      },
      {
        "letter": "D",
        "text": "Boosting requires unsupervised clustering before running linear regression"
      }
    ],
    "correct_text": "Boosting trains models sequentially where each subsequent learner focuses on correcting errors made by previous models, primarily reducing bias",
    "explanation": "Algorithms like AdaBoost and Gradient Boosting sequentially adjust sample weights or fit residual errors to convert weak learners into a strong learner.",
    "difficulty": "Hard"
  },
  {
    "id": 72,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Regularization Algorithms",
    "question": "What is the difference between L1 Regularization (Lasso) and L2 Regularization (Ridge)?",
    "options": [
      {
        "letter": "A",
        "text": "L1 adds the sum of absolute weights (|w|) driving parameters to exact zero (sparsity); L2 adds sum of squared weights (w^2) shrinking weights smoothly"
      },
      {
        "letter": "B",
        "text": "L1 is used only for neural networks; L2 is used only for decision trees"
      },
      {
        "letter": "C",
        "text": "L1 increases model overfitting; L2 eliminates bias completely"
      },
      {
        "letter": "D",
        "text": "L1 always requires non-differentiable step activations"
      }
    ],
    "correct_text": "L1 adds the sum of absolute weights (|w|) driving parameters to exact zero (sparsity); L2 adds sum of squared weights (w^2) shrinking weights smoothly",
    "explanation": "Lasso (L1) yields sparse models acting as automated feature selection; Ridge (L2) penalizes large weights preventing multicollinearity issues.",
    "difficulty": "Hard"
  },
  {
    "id": 73,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Regularization Algorithms",
    "question": "What is Dropout in deep neural network regularization?",
    "options": [
      {
        "letter": "A",
        "text": "Randomly deactivating (setting to zero) a fraction p of hidden units during each forward training step to prevent co-adaptation of features"
      },
      {
        "letter": "B",
        "text": "Dropping invalid rows from a CSV database during data cleaning"
      },
      {
        "letter": "C",
        "text": "Stopping model training when CPU temperature exceeds 80 degrees"
      },
      {
        "letter": "D",
        "text": "Deleting corrupted weights from hard disk storage"
      }
    ],
    "correct_text": "Randomly deactivating (setting to zero) a fraction p of hidden units during each forward training step to prevent co-adaptation of features",
    "explanation": "Dropout forces the neural network to learn redundant and robust representations because no single neuron can rely solely on adjacent neurons.",
    "difficulty": "Medium"
  },
  {
    "id": 74,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Generative Models",
    "question": "What are the two competing neural networks that compose a Generative Adversarial Network (GAN)?",
    "options": [
      {
        "letter": "A",
        "text": "The Generator (creates realistic synthetic data from random noise) and the Discriminator (distinguishes real data from synthetic fake data)"
      },
      {
        "letter": "B",
        "text": "The Encoder and Decoder"
      },
      {
        "letter": "C",
        "text": "The Actor and Critic"
      },
      {
        "letter": "D",
        "text": "The Feedforward network and Recurrent network"
      }
    ],
    "correct_text": "The Generator (creates realistic synthetic data from random noise) and the Discriminator (distinguishes real data from synthetic fake data)",
    "explanation": "GANs are framed as a two-player minimax game where the Generator tries to fool the Discriminator, while the Discriminator tries to detect fakes.",
    "difficulty": "Medium"
  },
  {
    "id": 75,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Generative Models",
    "question": "What is a Diffusion Model in generative machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "A generative model that gradually adds Gaussian noise to data in a forward process, and learns a neural network to reverse the denoising process to synthesize data"
      },
      {
        "letter": "B",
        "text": "A model that spreads database queries across multiple network nodes"
      },
      {
        "letter": "C",
        "text": "A clustering technique based on chemical diffusion rates"
      },
      {
        "letter": "D",
        "text": "An algorithm that calculates shortest paths through optical fiber"
      }
    ],
    "correct_text": "A generative model that gradually adds Gaussian noise to data in a forward process, and learns a neural network to reverse the denoising process to synthesize data",
    "explanation": "Modern state-of-the-art image generators (e.g., Stable Diffusion, Imagen) use reverse diffusion processes to generate high-fidelity samples from pure noise.",
    "difficulty": "Hard"
  },
  {
    "id": 76,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Reinforcement Learning",
    "question": "What role does the 'Discount Factor' (gamma, where 0 <= gamma <= 1) play in Reinforcement Learning?",
    "options": [
      {
        "letter": "A",
        "text": "It determines the present value of future rewards, balancing immediate vs delayed rewards"
      },
      {
        "letter": "B",
        "text": "It determines the learning rate step size during gradient descent"
      },
      {
        "letter": "C",
        "text": "It measures the classification error on validation data"
      },
      {
        "letter": "D",
        "text": "It specifies the maximum number of layers in a neural network"
      }
    ],
    "correct_text": "It determines the present value of future rewards, balancing immediate vs delayed rewards",
    "explanation": "A gamma near 0 makes the agent myopic (greedy for immediate rewards), while a gamma near 1 makes the agent farsighted, valuing long-term cumulative rewards.",
    "difficulty": "Medium"
  },
  {
    "id": 77,
    "subject_id": "machine-learning",
    "subject_code": "AI502",
    "subject_name": "Machine Learning",
    "unit": "Unit VI: Advanced Learning Topics",
    "topic": "Reinforcement Learning",
    "question": "In Deep Q-Networks (DQN), what is the purpose of the 'Experience Replay' buffer?",
    "options": [
      {
        "letter": "A",
        "text": "Storing past transitions (s, a, r, s') and sampling random mini-batches to break temporal correlation between consecutive experiences and stabilize training"
      },
      {
        "letter": "B",
        "text": "Playing video game recordings to human users for entertainment"
      },
      {
        "letter": "C",
        "text": "Storing trained weight parameters on secondary backup hard drives"
      },
      {
        "letter": "D",
        "text": "Buffering network socket communication between client and server"
      }
    ],
    "correct_text": "Storing past transitions (s, a, r, s') and sampling random mini-batches to break temporal correlation between consecutive experiences and stabilize training",
    "explanation": "Consecutive transitions in RL are highly correlated, leading to unstable gradient updates; uniform random sampling from replay memory breaks these correlations.",
    "difficulty": "Hard"
  }
];
