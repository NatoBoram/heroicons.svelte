<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BriefcaseSvelte from '../../../lib/16/solid/briefcase.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BriefcaseSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Briefcase" />
