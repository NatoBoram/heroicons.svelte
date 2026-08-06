<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BugAntSvelte from '../../../lib/16/solid/bug-ant.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BugAntSvelte,
		args: { class: '' },
	})
</script>

<Story name="BugAnt" />
