<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSlashSvelte from '../../../lib/16/solid/signal-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: SignalSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="SignalSlash" />
