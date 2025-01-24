<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AcademicCapSvelte from '../../../lib/16/solid/academic-cap.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: AcademicCapSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="AcademicCap" />
