<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AcademicCapSvelte from '../../../lib/24/solid/academic-cap.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: AcademicCapSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="AcademicCap" />
