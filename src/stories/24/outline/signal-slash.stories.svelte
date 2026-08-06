<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import SignalSlashSvelte from '../../../lib/24/outline/signal-slash.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: SignalSlashSvelte,
		args: { class: '' },
	})
</script>

<Story name="SignalSlash" />
