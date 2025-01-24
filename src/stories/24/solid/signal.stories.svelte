<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSvelte from '../../../lib/24/solid/signal.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: SignalSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Signal" />
