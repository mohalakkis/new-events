import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  StyleSheet,
} from 'react-native';
import ExitButton from '../atoms/ExitButton';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 25,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
  },
});

const { height } = Dimensions.get('window');

const DefaultModal = ({ children, show, onRequestClose }) => {
  const [state] = useState({
    opacity: new Animated.Value(0),
    container: new Animated.Value(height),
    modal: new Animated.Value(height),
  });

  const openModal = useCallback(() => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: 0, duration: 100 }),
      Animated.timing(state.opacity, { toValue: 1, duration: 300 }),
      Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true }),
    ]).start();
  }, [state]);

  const closeModal = useCallback(() => {
    Animated.sequence([
      Animated.timing(state.container, { toValue: height, duration: 100 }),
      Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
      Animated.timing(state.opacity, { toValue: 300, duration: 300 }),
    ]).start();
  }, [state]);

  useEffect(() => {
    if (show) {
      openModal();
    } else {
      closeModal();
    }
  }, [openModal, closeModal, show]);

  return (
    <Modal onRequestClose={onRequestClose} visible={show} transparent>
      <Animated.View
        style={[styles.container, {
          opacity: state.opacity,
          transform: [
            { translateY: state.container },
          ],
        }]}
      >
        <Animated.View
          style={[styles.modal, {
            transform: [
              { translateY: state.modal },
            ],
          }]}
        >
          <ExitButton onPress={onRequestClose}>
            X
          </ExitButton>
          <ScrollView showsVerticalScrollIndicator={false}>
            <KeyboardAvoidingView>
              {children}
            </KeyboardAvoidingView>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};
DefaultModal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
};
DefaultModal.defaultProps = {
  show: false,
};

export default DefaultModal;
