<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import AcademicCapSvelte from '../../../lib/24/outline/academic-cap.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: AcademicCapSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="AcademicCap" />
