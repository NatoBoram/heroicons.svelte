<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSvelte from '../../../lib/24/outline/signal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SignalSvelte,
		args: { class: '' },
	})
</script>

<Story name="Signal" />
