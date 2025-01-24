<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BriefcaseSvelte from '../../../lib/24/solid/briefcase.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BriefcaseSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Briefcase" />
