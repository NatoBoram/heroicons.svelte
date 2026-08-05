<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CommandLineSvelte from '../../../lib/16/solid/command-line.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: CommandLineSvelte,
		args: { class: '' },
	})
</script>

<Story name="CommandLine" />
